# Factory Method Design Pattern Example

A Core Java command-line application demonstrating the Factory Method Design Pattern in a Document Management System framework, isolating the instantiation logic of documents (Word, PDF, and Excel) from client classes.

---

## 📂 Project Structure

```text
Factory(design)
 └── src
      └── com
           └── cognizant
                └── factory
                     ├── Document.java
                     ├── WordDocument.java
                     ├── PdfDocument.java
                     ├── ExcelDocument.java
                     ├── DocumentFactory.java
                     ├── WordDocumentFactory.java
                     ├── PdfDocumentFactory.java
                     ├── ExcelDocumentFactory.java
                     └── FactoryMethodTest.java
```

---

## ⚙️ How to Compile & Run

Open a terminal or command prompt in the `Factory(design)` directory:

### 1. Compile the source files:
```bash
javac -d bin src/com/cognizant/factory/*.java
```

### 2. Run the program:
```bash
java -cp bin com.cognizant.factory.FactoryMethodTest
```

---

## 💻 Expected Output

```text
Word Document is opened.

PDF Document is opened.

Excel Document is opened.
```
