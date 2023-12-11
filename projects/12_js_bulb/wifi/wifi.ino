#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
 
const char* ssid = "duft_it";
const char* password = "******";
 
int ledPin = D1;
ESP8266WebServer server(80);

void rootRoute() {
  Serial.println("handleRequest");

  String result;

  result += "{\n";
  result += "  \"status\": \"ok\",\n";

  for (uint8_t i = 0; i < server.args(); i++) {
    String argKey = server.argName(i);
    String argValue = server.arg(i);

    if(argKey == "led") {
      if(argValue == "on") {
        digitalWrite(ledPin, LOW);
      }
      if(argValue == "off") {
        digitalWrite(ledPin, HIGH);
      }      
    }

    result += "  \"" + argKey + "\": \"" + argValue;
    if(i == server.args()-1) {
      result += "\"\n";
    } else {
      result += "\",\n";
    }
  }

  result += "}";

  server.sendHeader("Cache-Control", "no-cache");
  server.send(200, "application/json; charset=utf-8", result);
}
 
void setup() {
  Serial.begin(9600);
  delay(10);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);
 
  // Mit Wifi verbinden
  Serial.print("Verbinden mit: "); 
  Serial.println(ssid);
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi verbunden");
 
  // Start des Servers
  server.enableCORS(true);
  server.begin();
  Serial.println("Server gestartet");
 
  // Print the IP address
  Serial.print("Diese URL zum Verbinden aufrufen: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");

  server.on("/", HTTP_GET, rootRoute);
 
}
 
void loop() {
  server.handleClient();
}
