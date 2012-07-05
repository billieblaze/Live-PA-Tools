#include "SPI.h"
//#include "hsv2rgb.h"
#include <avr/pgmspace.h>
#include <MIDI.h>
#include <MenuBackend.h>
#include <LiquidCrystal.h>
#include <DFR_Key.h>

//#include "config.h"
//#include <ShiftMatrixPWM.h>   

LiquidCrystal lcd(8, 9, 4, 5, 6, 7); 

String version = "0.6";

int MIDIClockCounter = 0;
int tickCounter = 0;

int runSequencer=0;

// Menu 
MenuBackend menu = MenuBackend(menuUseEvent,menuChangeEvent);
//beneath is list of menu items needed to build the menu
MenuItem start = MenuItem("Run");
MenuItem editSeq = MenuItem("Edit");
MenuItem settings = MenuItem("Settings");
MenuItem Channel = MenuItem("MIDI Channel");
MenuItem BPM = MenuItem("BPM");


// Menu Handlers 
void menuUseEvent(MenuUseEvent used){}
void menuChangeEvent(MenuChangeEvent changed){}

// Setup

void setup(){
  lcd.begin(16, 2);
  lcd.clear();
  
  MIDI.begin();
  MIDI.setHandleStart(HandleStart);
  MIDI.setHandleClock(HandleClock);
  MIDI.setHandleStop(HandleStop);
  MIDI.setHandleContinue(HandleContinue);
  
  lcd.print("READY  ");
}


// MIDI Callbacks
void HandleStart(){
  MIDIClockCounter = 0;
  runSequencer = 1;
}

void HandleClock(){
   MIDIClockCounter++;

  if (MIDIClockCounter >= 24 && runSequencer == 1){
    MIDI.sendNoteOff(60,0,1);
    MIDI.sendNoteOn(60,127,1);

    tickCounter++;
    MIDIClockCounter=0; 
  } else {
    
  }
   
  if(tickCounter == 16){ 
   tickCounter=0;
  } 
}

void HandleStop(){
  runSequencer = 0;
}

void HandleContinue(){
  lcd.setCursor(0,0);
  lcd.print("Cont");
}


// Main Loop
void loop(){
  handleMIDI();
  handleLCD();
  handleKeypad();
  handleMatrix();
}


// Main Loop Handlers
void handleMIDI(){
  if (MIDI.read()) {                    // Is there a MIDI message incoming ?
    switch(MIDI.getType()) {		// Get the type of the message we caught
      default:
        
        break;
    }
  } 
}

void handleLCD(){
  if( runMode == 1){
     lcd.setCursor(0,0);
    lcd.print(runSequencer);
    lcd.print("-");
    lcd.print(tickCounter);
    lcd.print("-");
    
    lcd.print(MIDIClockCounter);
     lcd.print("   ");
  }
  
}

void handleKeypad(){
  
}

void handleMatrix(){
  
}

