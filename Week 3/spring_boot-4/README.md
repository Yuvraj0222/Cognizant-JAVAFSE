# Country Web Service REST API

A Spring Boot REST Web Service that loads a Country bean definition from a Spring XML configuration file and returns it as a serialized JSON object, following the Cognizant FSE Digital Nurture curriculum.

---

## 📂 Project Structure

```text
spring_boot-4
 ├── pom.xml
 └── src
      ├── main
      │    ├── java
      │    │    └── com.cognizant.springlearn
      │    │         ├── controller
      │    │         │    └── CountryController.java
      │    │         ├── model
      │    │         │    └── Country.java
      │    │         └── SpringLearnApplication.java
      │    └── resources
      │         ├── application.properties
      │         ├── country.xml
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
   cd "Week 3/spring_boot-4"
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
Navigate to: [http://localhost:8083/country](http://localhost:8083/country)

### 2. CURL Test
Run in your terminal:
```bash
curl http://localhost:8083/country
```

### 3. Postman Test
- **Method**: `GET`
- **URL**: `http://localhost:8083/country`

### Expected JSON Output (HTTP 200 OK):
```json
{
  "code": "IN",
  "name": "India"
}
```
