// Arduino Serial Tester
// rld, cycling'74, 3.2008

// LCD Keys
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,20,4);  // set the LCD address to 0x27 for a 16 chars and 2 line display


void setup() 
{ 
  lcd.init();                   
  lcd.backlight();
  lcd.print("Max4Live Test"); 
  Serial.begin(115200); // open the arduino serial port
} 


void loop() 
{ 
  while(Serial.available()) // check to see if there's serial data in the buffer
  {
    char inputData[3];
   
   Serial.readBytes(inputData,3); // read a byte of serial data

  lcd.setCursor(0,1);
  lcd.print(inputData[0], DEC);
 lcd.print("  ");
  lcd.print(inputData[1], DEC);
 lcd.print("  ");  
    lcd.print(inputData[2], DEC); 
    lcd.print("  ");
 }
 
  
  
} 
