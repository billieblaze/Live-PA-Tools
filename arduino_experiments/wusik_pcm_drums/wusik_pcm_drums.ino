/*

  Created by WilliamK @ Wusik Dot Com (c) 2011 - http://arduino.wusik.com
  
  8-Bit PCM Sound using PWM on Pin 9 and Pin 10 - Uses the 16-Bit Timer1 to sum 3 voices in each Pin
  
*/

#include <stdint.h>
#include <avr/interrupt.h>
#include <avr/io.h>
#include <avr/pgmspace.h>
#include <EEPROM.h>
#include "PCM_Data.h"

// ======================================================================================= //
unsigned int sample[6] = {2047,2047,2047,2047,2047,2047};
unsigned long mixer[2] = {(128*3),(128*3)};
byte inByte = 0;

// ======================================================================================= //
void setup()
{   
    pinMode(9,OUTPUT);
    pinMode(10,OUTPUT);
  
    Serial.begin(9600);
            
    // 16 Bit Timer Setup //
    // 16000000 (CPU CLOCK) / 760 (10 Bits) = 21052 samples-per-second (put a filter to remove anything above 10.5khz)
    TCCR1A = _BV(COM1A1) | _BV(COM1B1) | _BV(WGM11); // Fast PWM Timer on Pins 9 and 10
    TCCR1B = _BV(WGM12) | _BV(WGM13) | _BV(CS10); // Non-Phase Inverting - No Prescaler
    ICR1 = 760; // Max value of 760 (9-bits is 511 and 10-bits is 1023)
    TIMSK1 = _BV(TOIE1); // timer overflow interrupt
    sei(); // enable global interrupts
    OCR1A = (128*3); // Initial PWM Pin 9
    OCR1B = (128*3); // Initial PWM Pin 10
}

// ======================================================================================= //
void loop()
{
  if (Serial.available() > 0)
  {
    inByte = Serial.read();
  
    switch (inByte)
    {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        sample[inByte-'1'] = 0 ;
        break;
    }
  }
}

// ======================================================================================= //
ISR(TIMER1_OVF_vect)
{   
  // Do this first so the PWM is updated faster //
  OCR1A = mixer[0];
  OCR1B = mixer[1];

  // Now Calculate the next sample //
  if (sample[0] < 2047) { mixer[0]  = (unsigned int)pgm_read_byte(&PCM_Data[0][sample[0]]); sample[0]++; } else mixer[0] = 128;
  if (sample[1] < 2047) { mixer[0] += (unsigned int)pgm_read_byte(&PCM_Data[1][sample[1]]); sample[1]++; } else mixer[0] += 128;
  if (sample[2] < 2047) { mixer[0] += (unsigned int)pgm_read_byte(&PCM_Data[2][sample[2]]); sample[2]++; } else mixer[0] += 128;

  if (sample[3] < 2047) { mixer[1]  = (unsigned int)pgm_read_byte(&PCM_Data[3][sample[3]]); sample[3]++; } else mixer[1] = 128;
  if (sample[4] < 2047) { mixer[1] += (unsigned int)pgm_read_byte(&PCM_Data[4][sample[4]]); sample[4]++; } else mixer[1] += 128;
  if (sample[5] < 2047) { mixer[1] += (unsigned int)pgm_read_byte(&PCM_Data[5][sample[5]]); sample[5]++; } else mixer[1] += 128; 
}
