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

## 🎓 Interview & Viva Preparation

### 30 Beginner Questions

1. **What is Spring Boot?**
   - A framework designed to simplify the bootstrapping and development of new Spring applications by offering auto-configuration and starter dependencies.
2. **What is an embedded server?**
   - An application server (like Tomcat, Jetty, or Undertow) packaged inside the deployable application archive (JAR), eliminating the need for standalone server setups.
3. **What is the default port of Spring Boot?**
   - Port 8080.
4. **How do you change the port in Spring Boot?**
   - Set `server.port=XXXX` in the `application.properties` file.
5. **What is `@RestController`?**
   - A specialized controller annotation that combines `@Controller` and `@ResponseBody`, marking the class as a controller where every handler method returns a domain object directly serialized into JSON.
6. **What is `@GetMapping`?**
   - A shortcut annotation for `@RequestMapping(method = RequestMethod.GET)`.
7. **What is `@PathVariable`?**
   - An annotation used to extract dynamic placeholder values from the request URI path (e.g., `/accounts/{number}`).
8. **What is Maven?**
   - A build automation tool used to manage project dependencies, builds, and lifecycles.
9. **What is a POJO?**
   - Plain Old Java Object. A simple Java class containing private fields, constructors, getters, setters, and standard overrides without framework coupling.
10. **What is JSON?**
    - JavaScript Object Notation. A lightweight, text-based, language-independent data interchange format.
11. **Which dependency is used to create REST APIs in Spring Boot?**
    - `spring-boot-starter-web`.
12. **Why is `spring-boot-devtools` used?**
    - For hot-swapping classes, automatic restarts, and disabling cache configurations during development.
13. **What is the use of `spring.application.name`?**
    - Identifies the name of the microservice application, which is crucial when registering with discovery services like Eureka.
14. **What is dependency injection?**
    - A design pattern where the control of creating and binding dependencies is passed from the class to the Spring IOC container.
15. **How does Spring Boot auto-configure dependencies?**
    - Using `@EnableAutoConfiguration` (included in `@SpringBootApplication`) which scans the classpath and configures beans matching detected libraries.
16. **What is Tomcat?**
    - An open-source web server and servlet container that executes Java Servlets and renders JSP pages.
17. **What is the root annotation of a Spring Boot application?**
    - `@SpringBootApplication`.
18. **What three annotations are combined in `@SpringBootApplication`?**
    - `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`.
19. **What is HTTP?**
    - Hypertext Transfer Protocol. The application-layer protocol used to transmit web resources over TCP.
20. **What does HTTP Status 200 mean?**
    - OK. The request completed successfully.
21. **What does HTTP Status 404 mean?**
    - Not Found. The requested resource or endpoint path could not be located.
22. **What does HTTP Status 500 mean?**
    - Internal Server Error. The server encountered an unexpected condition that prevented it from fulfilling the request.
23. **What does HTTP Status 400 mean?**
    - Bad Request. The server could not understand the request due to invalid syntax.
24. **How does Jackson convert objects to JSON?**
    - It uses reflection to read getters of the object and serializes the field values into key-value pairs.
25. **What is a microservice?**
    - A single, independently deployable, domain-focused application that collaborates with other services to form a larger application.
26. **What is the difference between GET and POST HTTP methods?**
    - `GET` retrieves data and should be idempotent; `POST` creates a new resource and carries a request body.
27. **Do we need to compile a Spring Boot project before running it?**
    - Yes, Java source files must be compiled into `.class` files. `mvn spring-boot:run` handles compilation automatically.
28. **Can two Spring Boot applications run on port 8080 at the same time?**
    - No. A port bind exception will occur.
29. **What is Lombok?**
    - A library that uses annotations to generate getters, setters, constructors, and builders at compile-time to reduce boilerplate code. (Not used in this project to keep it simple and native).
30. **What is the purpose of `src/main/resources`?**
    - Stores non-Java assets like configurations (`application.properties`), static content, templates, and SQL scripts.

---

### 20 Intermediate Questions

31. **What is the difference between `@Controller` and `@RestController`?**
    - `@Controller` returns a view name to be resolved by a ViewResolver (HTML pages); `@RestController` writes the returned object directly to the HTTP response body as JSON.
32. **Explain the serialization process in Spring Boot REST endpoints.**
    - When an endpoint returns an object, the active `HttpMessageConverter` (Jackson) converts the Java object properties into JSON key-value format and sets the `Content-Type` header to `application/json`.
33. **Why do we prefer Stateless services in Microservices?**
    - Because they don't store session state on the server, allowing any instance of the microservice to process any incoming request, facilitating easy horizontal scaling.
34. **What is the purpose of `@RequestMapping`?**
    - Configures path mappings and HTTP methods at the controller class or method level.
35. **What is standard port allocation in microservices?**
    - Dynamic port binding or distinct configurations (e.g. 8080, 8081, 8082) mapped via a central Gateway.
36. **What is a Whitelabel Error Page?**
    - The fallback HTML page rendered by Spring Boot when no custom error controller is defined and an exception/404 occurs.
37. **What is the role of `spring-boot-starter-parent` in pom.xml?**
    - Provides default configurations, resource filtering, plugin management, and dependency version management.
38. **How do you pass multiple path variables in a REST URL?**
    - Map them separately in the path: `/accounts/{number}/transactions/{id}` and extract them using multiple `@PathVariable` parameters.
39. **What is an idempotent REST operation?**
    - An operation where multiple identical requests produce the same side-effect on the server as a single request (e.g. GET, PUT, DELETE).
40. **How do you exclude DevTools from a production build?**
    - Set `<optional>true</optional>` in pom.xml or exclude it during packaging using maven profiles.
41. **What is the difference between path variables and request parameters?**
    - Path variables (`@PathVariable`) identify resources in the path URI hierarchy; Request parameters (`@RequestParam`) filter or paginate resources in query strings (e.g. `?page=1`).
42. **How does Spring Boot resolve package scanning?**
    - It recursively scans all sub-packages starting from the package containing the class annotated with `@SpringBootApplication`.
43. **What is H2 database?**
    - An open-source, lightweight, in-memory relational database commonly used for development and unit testing.
44. **Why is data decentralization important in microservices?**
    - It ensures services are decoupled. If multiple services share a single database schema, changes by one team can break another team's service.
45. **What is the purpose of the `/actuator` endpoints?**
    - Provides production-ready monitoring capabilities, exposing health checks, metrics, thread dumps, and environment configurations.
46. **What is `@ResponseStatus` used for?**
    - Allows custom HTTP response status codes to be mapped to controller methods or exceptions.
47. **How do you configure database connections in application.properties?**
    - Set the URL, driver, username, and password properties (e.g. `spring.datasource.url`).
48. **What is the difference between Monolith and Microservices databases?**
    - Monoliths use a single shared schema; Microservices follow the "Database-per-Service" pattern.
49. **How do microservices communicate with each other?**
    - Synchronously (REST/HTTP, gRPC) or Asynchronously (Message brokers like RabbitMQ, Apache Kafka).
50. **What is a build lifecycle in Maven?**
    - A sequence of phases (clean, compile, test, package, install, deploy) that define the order of execution.

---

### 10 Advanced Questions

51. **What is the API Gateway pattern?**
    - A reverse proxy that acts as a single entry point for all client requests, routing them to appropriate microservices, handling authentication, and consolidating responses.
52. **How does Service Discovery (e.g., Eureka) work?**
    - Microservices register their network locations (IP and port) with Eureka on startup and send periodic heartbeats. Other services query Eureka to resolve instance locations dynamically.
53. **What is a Circuit Breaker pattern?**
    - A pattern that prevents a service from executing operations that are likely to fail, returning fallback responses immediately to avoid cascading resource exhaustion.
54. **How do you manage distributed transactions in microservices?**
    - Using the **Saga Pattern** (a sequence of local transactions with compensating actions) or two-phase commit (2PC) protocols (highly discouraged in distributed setups).
55. **Explain the CQRS pattern.**
    - Command Query Responsibility Segregation. Separates read operations (Queries) from write operations (Commands) into distinct models or databases to optimize performance.
56. **What is Log Aggregation in microservices?**
    - Collecting, parsing, and indexing logs from all microservice instances in a central location (e.g. ELK Stack, Splunk) for centralized querying.
57. **How does Spring Cloud Config handle properties decryption?**
    - It uses symmetric or asymmetric keys to decrypt encrypted properties (prefixed with `{cipher}`) before serving them to client microservices.
58. **Explain the Saga compensating transaction mechanism.**
    - If a step in a distributed business transaction fails, Saga triggers a series of rollback transactions in reverse order to restore data consistency.
59. **What is polyglot persistence?**
    - Storing data in different database types (Relational, Document, Key-Value) depending on the specific requirements of each microservice.
60. **How do you handle security (JWT) in a microservices cluster?**
    - Authenticate clients at the API Gateway, generate a signed JWT containing claims, and propagate it to backend microservices, which validate the signature.

---

### 25 Viva Questions with Answers

1. **Q: What are the two microservices we created in this lab?**
   - *A*: Account Microservice (port 8080) and Loan Microservice (port 8081).
2. **Q: Why did we run the services on different ports?**
   - *A*: A port can only bind to a single process at a time on one machine. Running both on port 8080 would cause a port conflict exception.
3. **Q: How does Spring Boot auto-compile and restart changes?**
   - *A*: Via the `spring-boot-devtools` dependency, which restarts Tomcat whenever classes are recompiled.
4. **Q: What annotation marks a class as a REST controller?**
   - *A*: `@RestController`.
5. **Q: What HTTP method did we use to fetch account details?**
   - *A*: HTTP `GET` method.
6. **Q: What is the path variable in `@GetMapping("/accounts/{number}")`?**
   - *A*: `{number}` is the path variable, bound to the parameter using `@PathVariable`.
7. **Q: What is the default port configuration for the Loan microservice?**
   - *A*: Port `8081`, set via `server.port=8081` in `application.properties`.
8. **Q: Which Java version is configured in this lab?**
   - *A*: Java 21.
9. **Q: What library did Spring Boot use behind the scenes to output JSON?**
   - *A*: Jackson API.
10. **Q: What is the Maven packaging command used to build executable JARs?**
    - *A*: `mvn clean package`.
11. **Q: What happens if you access an invalid endpoint path?**
    - *A*: You receive an HTTP 404 Not Found error (or Whitelabel Error Page).
12. **Q: How do you start a Spring Boot application using Maven?**
    - *A*: `mvn spring-boot:run`.
13. **Q: Why is there no database configured in this hands-on lab?**
    - *A*: To focus purely on learning microservice independence, server port isolation, and JSON serialization.
14. **Q: What does `@SpringBootApplication` do?**
    - *A*: It enables auto-configuration, package components scanning, and marks the class as a configuration source.
15. **Q: What is the purpose of `spring.application.name`?**
    - *A*: It gives the service a logical name (`account-service` and `loan-service`) used for discovery and logging.
16. **Q: What is the return type of the controller methods?**
    - *A*: The POJOs themselves (`Account` and `Loan`), which are serialized to JSON automatically.
17. **Q: What format is used by application configurations?**
    - *A*: Key-value properties format in `application.properties`.
18. **Q: What web server is embedded inside Spring Boot by default?**
    - *A*: Apache Tomcat.
19. **Q: How are dependencies managed in these projects?**
    - *A*: Through the Maven `pom.xml` configuration file.
20. **Q: What is the group ID configured in Spring Initializr for these services?**
    - *A*: `com.cognizant`.
21. **Q: What are the target folders for compiling Java source files?**
    - *A*: The `target/classes` directory.
22. **Q: Does a microservice have to be written in Java?**
    - *A*: No, microservices are language-agnostic. One can be in Java, another in Python or Node.js.
23. **Q: How does Tomcat start when running `mvn spring-boot:run`?**
    - *A*: The embedded Tomcat starts in-process dynamically when the Spring ApplicationContext is refreshed.
24. **Q: What is the output of the curl command?**
    - *A*: A JSON string representation of the Java model returned by the endpoint.
25. **Q: Why is REST stateless?**
    - *A*: Because the server does not store client session context. Each request must contain all the information necessary to serve it.
