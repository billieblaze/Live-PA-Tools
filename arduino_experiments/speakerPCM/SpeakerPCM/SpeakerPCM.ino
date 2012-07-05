/*
 * speaker_pcm
 *
 * Plays 8-bit PCM audio on pin 11 using pulse-width modulation (PWM).
 * For Arduino with Atmega168 at 16 MHz.
 *
 * Uses two timers. The first changes the sample value 8000 times a second.
 * The second holds pin 11 high for 0-255 ticks out of a 256-tick cycle,
 * depending on sample value. The second timer repeats 62500 times per second
 * (16000000 / 256), much faster than the playback rate (8000 Hz), so
 * it almost sounds halfway decent, just really quiet on a PC speaker.
 *
 * Takes over Timer 1 (16-bit) for the 8000 Hz timer. This breaks PWM
 * (analogWrite()) for Arduino pins 9 and 10. Takes Timer 2 (8-bit)
 * for the pulse width modulation, breaking PWM for pins 11 & 3.
 *
 * References:
 *     http://www.uchobby.com/index.php/2007/11/11/arduino-sound-part-1/
 *     http://www.atmel.com/dyn/resources/prod_documents/doc2542.pdf
 *     http://www.evilmadscientist.com/article.php/avrdac
 *     http://gonium.net/md/2006/12/27/i-will-think-before-i-code/
 *     http://fly.cc.fer.hr/GDM/articles/sndmus/speaker2.html
 *     http://www.gamedev.net/reference/articles/article442.asp
 *
 * Michael Smith <michael@hurts.ca>
 */

#include <stdint.h>
#include <avr/interrupt.h>
#include <avr/io.h>
#include <avr/pgmspace.h>

#define SAMPLE_RATE 8000  //8KHz sample rate

/*
 * The audio data needs to be unsigned, 8-bit, 8000 Hz, and small enough
 * to fit in flash. 10000-13000 samples is about the limit.
 *
 * sounddata.h should look like this:
 *     const int sounddata_length=10000;
 *     const unsigned char sounddata_data[] PROGMEM = { ..... };
 *
 * You can use wav2c from GBA CSS:
 *     http://thieumsweb.free.fr/english/gbacss.html
 * Then add "PROGMEM" in the right place. I hacked it up to dump the samples
 * as unsigned rather than signed, but it shouldn't matter.
 *
 * http://musicthing.blogspot.com/2005/05/tiny-music-makers-pt-4-mac-startup.html
 * mplayer -ao pcm macstartup.mp3
 * sox audiodump.wav -v 1.32 -c 1 -r 8000 -u -1 macstartup-8000.wav
 * sox macstartup-8000.wav macstartup-cut.wav trim 0 10000s
 * wav2c macstartup-cut.wav sounddata.h sounddata
 */

#include "sounddata.h"

#define SAMPLEINDEX_MASK 0x0FFF

int ledPin = 13;  //LED outpin - not used in this code.
int speakerPin = 3; //Pin used for PWM to output PCM sound on.

//Used to implement phase increment resampling
uint16_t sampleStep;  //The step size for each sample. All 16 bits are used.
                      //The lower 12 are fractional steps. A step size of 0x01000 is equal to one step
                      //per sample. Also, this means that playback can be done at a maximum of 16X the 
                      //orignal rate.
volatile unsigned long sampleIndex; //Keeps the current sample index.

//Used by the ISR and initalizaiton methods
uint16_t samplePoint;
unsigned int sampleValue;

//Prototype for DAC output function
//The idea is to abstract the type of DAC used. It is assumed that the DAC would never have more then
//16 bits of resolution so an unsigned int is used. If you intened to have 8-Bits of resolution then you
//need to upshift the input (value<<8). This does add some time/hassel but it support the concept of
//differnet resolutions independent of the applicaiton code.
//The second parameter is the DAC channel. For the inital test code one is used for the PWM DAC and 
//and the other is for the R2R DAC. In a future version I want to have Left and Right channels
//
#define DAC_PWM 1
#define DAC_R2R 2
void SetDAC(unsigned int outputValue, unsigned int channel);

//Lower level funcitons to actualy set the specific DAC type. Used only by the SetDAC funciton.
void SetDAC_PWM(unsigned int outputValue);
void SetDAC_R2R(unsigned int outputValue);

// This is called at 8000 Hz to load the next sample.
ISR(TIMER1_COMPA_vect) {
  
  //convert the sampleIndex into the actual array index. SampleIndex is a long so we have 
  //32 bits to use. The lower 12 bits are for fractional phase storage so we need to strip 
  //them off. Then mask off the upper bits to create looping.
  samplePoint=(sampleIndex>>12)&0xFFF;
  
  //Read the indexed sample and upshift the 8-bit value for the 16-bit DAC function
  sampleValue=pgm_read_byte(&sounddata_data[samplePoint])<<8;

  //Set both the DAC channels to the same sample value.
  SetDAC(sampleValue, DAC_PWM);
  SetDAC(sampleValue, DAC_R2R);
  
  //Increment the index by the phase step value;
  sampleIndex+=sampleStep;
}

void startPlayback() {
    
    pinMode(speakerPin, OUTPUT);
    sampleStep=0x1000; //Set to orignal sample rate.
    
    // Set up Timer 2 to do pulse width modulation on the speaker
    // pin.

    // Use internal clock (datasheet p.160)
    ASSR &= ~(_BV(EXCLK) | _BV(AS2));

    // Set fast PWM mode  (p.157)
    TCCR2A |= _BV(WGM21) | _BV(WGM20);
    TCCR2B &= ~_BV(WGM22);

    // Do non-inverting PWM on pin OC2A (p.155)
    // On the Arduino this is pin 11.
    TCCR2A = (TCCR2A | _BV(COM2A1)) & ~_BV(COM2A0);
    TCCR2A &= ~(_BV(COM2B1) | _BV(COM2B0));

    // No prescaler (p.158)
    TCCR2B = (TCCR2B & ~(_BV(CS12) | _BV(CS11))) | _BV(CS10);

    // Set initial pulse width to the first sample.
    sampleValue=pgm_read_byte(&sounddata_data[0])<<8;
//    SetPWMDAC(sampleValue);
//    SetR2RDAC(sampleValue);


    // Set up Timer 1 to send a sample every interrupt.
    cli();

    // Set CTC mode (Clear Timer on Compare Match) (p.133)
    // Have to set OCR1A *after*, otherwise it gets reset to 0!
    TCCR1B = (TCCR1B & ~_BV(WGM13)) | _BV(WGM12);
    TCCR1A = TCCR1A & ~(_BV(WGM11) | _BV(WGM10));

    // No prescaler (p.134)
    TCCR1B = (TCCR1B & ~(_BV(CS12) | _BV(CS11))) | _BV(CS10);

    // Set the compare register (OCR1A).
    // OCR1A is a 16-bit register, so we have to do this with
    // interrupts disabled to be safe.
    OCR1A = F_CPU / SAMPLE_RATE;    // 16e6 / 8000 = 2000

    // Enable interrupt when TCNT1 == OCR1A (p.136)
    TIMSK1 |= _BV(OCIE1A);

//    lastSample = pgm_read_byte(&sounddata_data[sounddata_length-1]);
    sampleIndex = 0;
    sei();
}

void SetDAC(unsigned int outputValue, unsigned int channel) {
  switch(channel) {
    case DAC_PWM :
      SetDAC_PWM(outputValue);
      break;
    case DAC_R2R :
      SetDAC_R2R(outputValue);
      break;
  }
}

//Set the PWM D/A converter output
void SetDAC_PWM(unsigned int outputValue){
  //This implementation uses PWM in 8 bit mode.
  //Load the upper 8 bits into the PWM control register
  OCR2A = (outputValue>>8)&0xFF;
}

//Set the R2R D/A converter output.
void SetDAC_R2R(unsigned int outputValue){
  //We are using port D bits 2-7 for a 6-bit D/A. 
  //Bits 0 and 1 are serial which we dont want to disturb
  PORTD=(PIND&0x03)|((outputValue>>8)&0xFC);
}

#define MAX_STEP 0x05000
#define MIN_STEP 0x00400

void setup() {
  //Set the LED pin mode to output.
  pinMode(ledPin, OUTPUT);
  
  //Setup the hardware for the D/A converter
  //We are using port D bits 2-7 for a 6-bit D/A. 
  //Bits 0 and 1 are serial which we dont want to disturb
  DDRD|=B11111110; //Set upper 6 as ouput, lower are TX and RX

  //Set an inital phase step size.
  sampleStep=MIN_STEP;

  //Setup the timers for the ISR and PCM generation
  startPlayback();
}

void loop() {
  //To demonstrate the phase steping feature set the phase step as a function
  //of the A/D input on input 0. Hook up a pot to vary the phase step and resample the 
  //sound at diffenret frequencies.
  sampleStep=MIN_STEP+(analogRead(0)<<3);
}
