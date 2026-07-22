# Dependency Injection System

A simple Maven command-line application demonstrating Dependency Injection (specifically Setter Injection) in Spring Core using XML Configuration (`applicationContext.xml`), following the Cognizant FSE Digital Nurture curriculum.

---

## 📂 Project Structure

```text
Dependency_injection
 ├── pom.xml
 └── src
      └── main
           ├── java
           │    └── com.library
           │         ├── repository
           │         │    └── BookRepository.java
           │         ├── service
           │         │    └── BookService.java
           │         └── MainApp.java
           └── resources
                └── applicationContext.xml
```

---

## ⚙️ How to Compile & Run

Open a terminal or command prompt in the `Dependency_injection` directory:

### 1. Build the project:
```bash
mvn clean package
```

### 2. Run the application:
```bash
mvn exec:java -Dexec.mainClass="com.library.MainApp"
```

---

## 💻 Expected Output

```text
Available Books:
Java Programming
Spring Framework
Database Systems
```
