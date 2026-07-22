# Singleton Design Pattern Example

A Core Java command-line application that demonstrates the Singleton Design Pattern using a centralized Logger utility, ensuring only one logger instance exists in-memory throughout the application lifecycle.

---

## 📂 Project Structure

```text
Singleton(Design)
 └── src
      └── com
           └── cognizant
                └── singleton
                     ├── Logger.java
                     └── SingletonTest.java
```

---

## ⚙️ How to Compile & Run

Open a terminal or command prompt in the `Singleton(Design)` directory:

### 1. Compile the source files:
```bash
javac -d bin src/com/cognizant/singleton/*.java
```

### 2. Run the program:
```bash
java -cp bin com.cognizant.singleton.SingletonTest
```

---

## 💻 Expected Output

```text
Log: Application Started
Log: User Logged In

Logger1 HashCode: <HashCodeValue>
Logger2 HashCode: <HashCodeValue>

Both objects are the same instance.
Singleton Pattern implemented successfully.
```
