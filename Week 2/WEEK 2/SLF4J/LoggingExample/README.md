# Java Logging Example (SLF4J & Logback)

A simple Maven command-line application demonstrating standard logging configurations using the Simple Logging Facade for Java (SLF4J) API with the Logback implementation, following the Cognizant FSE Digital Nurture curriculum.

---

## 📂 Project Structure

```text
LoggingExample
 ├── pom.xml
 └── src
      └── main
           └── java
                └── com
                     └── example
                          └── logging
                               └── LoggingExample.java
```

---

## ⚙️ How to Compile & Run

Open a terminal or command prompt in the `LoggingExample` directory:

### 1. Build the project:
```bash
mvn clean package
```

### 2. Run the application:
```bash
mvn exec:java -Dexec.mainClass="com.example.logging.LoggingExample"
```

---

## 💻 Expected Output

```text
[main] ERROR com.example.logging.LoggingExample - This is an error message
[main] WARN com.example.logging.LoggingExample - This is a warning message
```
