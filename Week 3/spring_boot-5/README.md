# Get Country Based on Country Code

A Spring Boot REST Web Service that retrieves country details dynamically by country code, searching a list loaded from a Spring XML configuration file, following the Cognizant FSE Digital Nurture curriculum.

---

## 📂 Project Structure

```text
spring_boot-5
 ├── pom.xml
 └── src
      ├── main
      │    ├── java
      │    │    └── com.cognizant.springlearn
      │    │         ├── controller
      │    │         │    └── CountryController.java
      │    │         ├── exception
      │    │         │    ├── CountryNotFoundException.java
      │    │         │    └── GlobalExceptionHandler.java
      │    │         ├── model
      │    │         │    └── Country.java
      │    │         ├── service
      │    │         │    └── CountryService.java
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
   cd "Week 3/spring_boot-5"
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

## 🧪 Testing the Endpoints

### 1. Valid Country Request (Case-Insensitive)
- **URL**: [http://localhost:8083/countries/in](http://localhost:8083/countries/in)
- **CURL**: `curl -i http://localhost:8083/countries/IN`
- **Expected Status**: `200 OK`
- **Expected JSON Output**:
  ```json
  {
    "code": "IN",
    "name": "India"
  }
  ```

### 2. Invalid Country Request
- **URL**: [http://localhost:8083/countries/xyz](http://localhost:8083/countries/xyz)
- **CURL**: `curl -i http://localhost:8083/countries/xyz`
- **Expected Status**: `404 Not Found`
- **Expected JSON Output**:
  ```json
  {
    "status": 404,
    "error": "Country Not Found",
    "message": "Country code xyz not found"
  }
  ```
