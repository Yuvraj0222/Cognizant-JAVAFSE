# Hello World RESTful Web Service

A simple REST API implementing the "Hello World" endpoint in Spring Boot on port 8083, following the Cognizant FSE Digital Nurture curriculum.

---

## 📂 Project Structure

```text
spring_boot-3
 ├── pom.xml
 └── src
      ├── main
      │    ├── java
      │    │    └── com.cognizant.springlearn
      │    │         ├── controller
      │    │         │    └── HelloController.java
      │    │         └── SpringLearnApplication.java
      │    └── resources
      │         ├── application.properties
      │         └── logback.xml
      └── test
           └── java
                └── com.cognizant.springlearn
                     └── SpringLearnApplicationTests.java
```

---

## ⚙️ How to Run

1. Open a terminal in the project directory:
   ```bash
   cd "Week 3/spring_boot-3"
   ```
2. Build the project using Maven:
   ```bash
   mvn clean package
   ```
3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

---

## 🧪 Testing the Endpoint

### 1. Browser Test
Navigate to: [http://localhost:8083/hello](http://localhost:8083/hello)

### 2. CURL Test
Run in your terminal:
```bash
curl http://localhost:8083/hello
```

### 3. Postman Test
- **Method**: `GET`
- **URL**: `http://localhost:8083/hello`

### Expected Output (HTTP 200 OK):
```text
Hello World!!
```
