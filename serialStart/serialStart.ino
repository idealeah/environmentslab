int buttonPin = 2;
int sensorPin = A0;
int ledPin = 12;

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {

  int buttonState = digitalRead(buttonPin);
  int sensorState = analogRead(sensorPin);
  Serial.print(sensorState);
  Serial.print("\t");
  Serial.print(buttonState);
  Serial.print("\t");

  int ledValue = map(sensorState, 700, 1000, 0, 255);
  Serial.print(ledValue);
  Serial.print("\n");
  analogWrite(ledPin, ledValue);
  
}
