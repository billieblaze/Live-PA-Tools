
#include <LiquidCrystal.h>
#include <DFR_Key.h>
#include "TimerOne.h"
 
// LCD Keys
LiquidCrystal lcd(8, 9, 4, 5, 6, 7); 
DFR_Key keypad;
int localKey = 0; 
String keyString = "";
int ledPin = 3;
unsigned int value;

void setup() {
 
  lcd.begin(16, 2);
  lcd.clear();
  lcd.print("Audio In Test");
  

  pinMode(10, OUTPUT);
  Timer1.initialize(50);         // initialize timer1, and set a 1/2 second period
  Timer1.pwm(3, 256, 10000);                // setup pwm on pin 9, 50% duty cycle
  Timer1.attachInterrupt(callback);  // attaches callback() as a timer overflow interrupt
}
 
void callback()
{
value = analogRead(A1);

 // analogWrite(ledPin, value/2);
}
 

void loop() {
  
 

 
}

