# Bank Microservices Application (Week 4 Hands-on Lab)

A complete hands-on guide implementing two independent Spring Boot microservices: **Account Microservice** (port 8080) and **Loan Microservice** (port 8081). This project follows the enterprise standards of the Cognizant FSE Digital Nurture curriculum.

---

## 📂 Project Structure

```text
Week 4
 ├── account
 │    ├── pom.xml
 │    └── src
 │         └── main
 │              ├── java
 │              │    └── com.cognizant.account
 │              │         ├── controller
 │              │         │    AccountController.java
 │              │         ├── model
 │              │         │    Account.java
 │              │         └── AccountApplication.java
 │              └── resources
 │                   └── application.properties
 │
 ├── loan
 │    ├── pom.xml
 │    └── src
 │         └── main
 │              ├── java
 │              │    └── com.cognizant.loan
 │              │         ├── controller
 │              │         │    LoanController.java
 │              │         ├── model
 │              │         │    Loan.java
 │              │         └── LoanApplication.java
 │              └── resources
 │                   └── application.properties
 │
 └── README.md
```

---

## 📘 Concept Explanations

### 1. What is Microservice Architecture?
Microservice Architecture is an architectural style that structures an application as a collection of small, autonomous services modeled around a business domain. Each service runs in its own process, communicates via lightweight mechanisms (usually HTTP/REST), and is developed, deployed, and scaled independently.

### 2. Monolithic vs. Microservices

| Feature | Monolith | Microservices |
| :--- | :--- | :--- |
| **Deployment** | All features are packaged and deployed as a single unit (WAR/JAR). | Each business service is packaged and deployed independently. |
| **Scaling** | Must scale the entire application, even if only one module is heavily used. | Scale only the specific microservice experiencing high load. |
| **Database** | Shared, single database. High risk of coupling. | Decentralized data; each microservice owns its private database. |
| **Fault Isolation** | A bug in one module (e.g., a memory leak) can crash the whole app. | If one service fails, others continue running (isolated impact). |
| **Technology Stack** | Forced to use the same language/framework across the entire app. | Polyglot architecture; use the best tech stack for each service. |

### 3. Key Advantages of Microservices
- **Independent Deployment**: Changes can be released to production for a single service without redeploying the rest of the application.
- **Independent Scaling**: The Account service can be run on 2 instances while the Loan service runs on 5 instances to optimize cloud costs.
- **Fault Tolerance**: If the Loan service crashes, customers can still view their Account details.
- **Team Autonomy**: Small teams can own specific services from development to production.

### 4. REST APIs & Embedded Tomcat
- **REST APIs**: Representational State Transfer APIs use standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) to transfer JSON data over the network.
- **Embedded Tomcat**: Spring Boot packages a Tomcat server directly inside the executable JAR. You do not need to install an external application server; running the JAR automatically bootstraps Tomcat.

### 5. Spring Boot DevTools
Provides development-time tools like **automatic restart** (whenever files on the classpath change) and **LiveReload** (automatically refreshing browser pages). It disables caching by default to ensure changes are visible immediately.

### 6. Why Different Server Ports are Required
On a single operating system, only one process can bind to a specific TCP port (like 8080) at any given time. Trying to start a second service on the same port results in a `BindException (Port already in use)`. Therefore:
- The **Account Microservice** is configured to port `8080`.
- The **Loan Microservice** is configured to port `8081`.

### 7. Java-to-JSON Serialization (Jackson)
Spring Boot's `spring-boot-starter-web` transitively includes the **Jackson JSON** library. When a controller returns a POJO (Java Object) directly from a `@GetMapping` endpoint, Spring's `HttpMessageConverter` (specifically `MappingJackson2HttpMessageConverter`) intercepts the object and automatically serializes its fields into a JSON string sent in the HTTP response body.

---

## ⚡ Running the Projects

### Running Simultaneously

To run both microservices at the same time:
1. Open two separate terminal windows.
2. In **Terminal 1** (Account Service):
   ```bash
   cd account
   mvn clean package
   mvn spring-boot:run
   ```
3. In **Terminal 2** (Loan Service):
   ```bash
   cd loan
   mvn clean package
   mvn spring-boot:run
   ```

---

## 🧪 Testing the Endpoints

### 1. Browser Test
Open your web browser and navigate to:
- **Account Service**: [http://localhost:8080/accounts/00987987973432](http://localhost:8080/accounts/00987987973432)
- **Loan Service**: [http://localhost:8081/loans/H00987987972342](http://localhost:8081/loans/H00987987972342)

### 2. CURL Command Test
Execute these commands in your terminal:
```bash
# Test Account Service
curl http://localhost:8080/accounts/00987987973432

# Test Loan Service
curl http://localhost:8081/loans/H00987987972342
```

### 3. Postman Configuration
- **Request Type**: `GET`
- **URLs**:
  - `http://localhost:8080/accounts/00987987973432`
  - `http://localhost:8081/loans/H00987987972342`
- **Headers**: `Accept: application/json`

### 4. Expected Output Responses

#### Account Service Response (HTTP 200 OK):
```json
{
  "number": "00987987973432",
  "type": "Savings",
  "balance": 234343.0
}
```

#### Loan Service Response (HTTP 200 OK):
```json
{
  "number": "H00987987972342",
  "type": "Car",
  "loan": 400000.0,
  "emi": 3258.0,
  "tenure": 18
}
```

---

## ⚠️ Troubleshooting Common Errors

| Error | Cause | Solution |
| :--- | :--- | :--- |
| **Port Already in Use (`BindException`)** | Another process is already running on port 8080 or 8081. | Find the process using `netstat -ano \| findstr 8080` (on Windows) or `lsof -i :8080` (on Unix) and kill it, or configure a different port in `application.properties`. |
| **Whitelabel Error Page / 404** | The endpoint path is misspelled, or the controller package is not scanned. | Check endpoint spelling. Ensure your controller is in a sub-package of the main class (e.g. `com.cognizant.account.controller` under `com.cognizant.account`). |
| **No mapping found / 405 Method Not Allowed** | The HTTP method used (e.g. POST) does not match the controller annotation (`@GetMapping`). | Verify that you are sending a `GET` request. |
| **Tomcat Startup Failure** | Missing Java version matching or configuration problems. | Verify your JAVA_HOME points to Java 17 or Java 21, and run `mvn clean` before building. |

---

## 🌟 Future Enhancements

Once you master this base project, you can integrate the following cloud-native patterns:
- **Eureka Server**: For service registration and discovery, removing hardcoded URLs.
- **Spring Cloud Config**: Centralizing configuration properties for all microservices in a git repo.
- **Spring Cloud Gateway**: Acting as a single entry point for routing and handling cross-cutting concerns (rate-limiting, logging, JWT verification).
- **OpenFeign**: Providing declarative REST clients for easy inter-service communication.
- **Resilience4j**: Implementing circuit breakers to handle fallback logic when services fail.
- **Docker & Kubernetes**: Containerizing both JARs to run in container pods.

---
