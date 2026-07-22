# Library Management System

A simple Maven command-line application demonstrating dependency injection (setter injection) in Spring Core using XML Configuration (`applicationContext.xml`), following the Cognizant FSE Digital Nurture curriculum.

---

## 📂 Project Structure

```text
LibraryManagement
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

Open a terminal or command prompt in the `LibraryManagement` directory:

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
