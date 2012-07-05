/*
  Analog Input
 Demonstrates analog input by reading an analog sensor on analog pin 0 and
 turning on and off a light emitting diode(LED)  connected to digital pin 13. 
 The amount of time the LED will be on and off depends on
 the value obtained by analogRead(). 
 
 The circuit:
 * Potentiometer attached to analog input 0
 * center pin of the potentiometer to the analog pin
 * one side pin (either one) to ground
 * the other side pin to +5V
 * LED anode (long leg) attached to digital output 13
 * LED cathode (short leg) attached to ground
 
 * Note: because most Arduinos have a built-in LED attached 
 to pin 13 on the board, the LED is optional.
 
 
 Created by David Cuartielles
 modified 30 Aug 2011
 By Tom Igoe
 
 This example code is in the public domain.
 
 http://arduino.cc/en/Tutorial/AnalogInput
 
 */
#include <LiquidCrystal.h>

// LCD Keys
LiquidCrystal lcd(8, 9, 4, 5, 6, 7); 

int sensorPin = A5;    // select the input pin for the potentiometer

int sensorValue = 0;  // variable to store the value coming from the sensor

static int KEY1_ARV = 19; 
static int KEY2_ARV = 41; 
static int KEY3_ARV = 61; 
static int KEY4_ARV = 1000; 
static int KEY5_ARV = 70; 
static int KEY6_ARV = 140; 
static int KEY7_ARV = 190; 
static int KEY8_ARV = 254; 
static int KEY9_ARV = 40; 
static int KEY10_ARV = 80; 
static int KEY11_ARV = 115; 
static int KEY12_ARV = 149; 
static int KEY13_ARV = 27; 
static int KEY14_ARV = 54; 
static int KEY15_ARV = 802; 
static int KEY16_ARV = 104; 

    int _threshold = 3;
    int _curInput = 0;
    
void setup() {
  
  lcd.begin(16, 2);
  lcd.clear();
  lcd.print("Analog In test");
  delay(250);

  lcd.setCursor(0,1);
  lcd.print("Init...");
}

void loop() {
  checkPads();       
}


void checkPads(){
     lcd.setCursor(0,1);
    lcd.print("               ");
        lcd.setCursor(0,1);
        
  // read the value from the sensor:
  _curInput = analogRead(sensorPin);
  
  if (_curInput > 0){ 

    int _curKey = 0;
    lcd.print(_curInput);
    lcd.print("-");
    
  
    
     if (_curInput > KEY1_ARV - _threshold && _curInput < KEY1_ARV + _threshold ) _curKey = 1;
        else if (_curInput > KEY2_ARV - _threshold && _curInput < KEY2_ARV + _threshold ) _curKey = 2;
        else if (_curInput > KEY3_ARV - _threshold && _curInput < KEY3_ARV + _threshold ) _curKey = 3;
        else if (_curInput > KEY4_ARV - _threshold && _curInput < KEY4_ARV + _threshold ) _curKey = 4;
        else if (_curInput > KEY5_ARV - _threshold && _curInput < KEY5_ARV + _threshold ) _curKey = 5;
        else if (_curInput > KEY6_ARV - _threshold && _curInput < KEY6_ARV + _threshold ) _curKey = 6;
        else if (_curInput > KEY7_ARV - _threshold && _curInput < KEY7_ARV + _threshold ) _curKey = 7;
        else if (_curInput > KEY8_ARV - _threshold && _curInput < KEY8_ARV + _threshold ) _curKey = 8;
        else if (_curInput > KEY9_ARV - _threshold && _curInput < KEY9_ARV + _threshold ) _curKey = 9;
        else if (_curInput > KEY10_ARV - _threshold && _curInput < KEY10_ARV + _threshold ) _curKey = 10;
        else if (_curInput > KEY11_ARV - _threshold && _curInput < KEY11_ARV + _threshold ) _curKey = 11;
        else if (_curInput > KEY12_ARV - _threshold && _curInput < KEY12_ARV + _threshold ) _curKey = 12;
        else if (_curInput > KEY13_ARV - _threshold && _curInput < KEY13_ARV + _threshold ) _curKey = 13;
        else if (_curInput > KEY14_ARV - _threshold && _curInput < KEY14_ARV + _threshold ) _curKey = 14;
        else if (_curInput > KEY15_ARV - _threshold && _curInput < KEY15_ARV + _threshold ) _curKey = 15;
        else if (_curInput > KEY16_ARV - _threshold && _curInput < KEY16_ARV + _threshold ) _curKey = 16;
    
        
        
      lcd.print(_curKey);  delay(300);

  }       

}
