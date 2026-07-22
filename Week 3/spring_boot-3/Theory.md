# Theory & Q&A: Hello World RESTful Web Service

This document provides a complete conceptual walkthrough, logging guidelines, HTTP header breakdowns, troubleshooting steps, and interview preparation questions for the Hello World RESTful Web Service.

---

## 📘 Spring Web & REST Fundamentals

### 1. REST Architecture & Concepts
- **REST (Representational State Transfer)**: An architectural style for designing networked applications. It relies on a stateless, client-server, cacheable communications protocol — virtually always HTTP.
- **RESTful Web Services**: Web services built following REST principles, exposing resources through URIs and manipulating them using standard HTTP methods.
- **HTTP (Hypertext Transfer Protocol)**: The underlying protocol of the Web, defining how messages are formatted and transmitted, and what actions web servers and browsers should take.
- **Client**: The requesting party (e.g. web browser, curl, Postman) that initiates HTTP requests.
- **Server**: The processing party (e.g. Tomcat/Spring Boot application) that listens for requests, processes them, and returns HTTP responses.
- **Resource**: Any entity or object that can be identified, named, and represented (e.g. a user, an account, or a text message).
- **URI (Uniform Resource Identifier)**: A string of characters used to identify a resource on a server (e.g. `/hello`).
- **JSON (JavaScript Object Notation)**: A lightweight data-interchange format, commonly used to represent resources in REST APIs due to its readability and ease of parsing.
- **Plain Text Response**: Returning a raw character sequence (like `"Hello World!!"`) instead of structured JSON or XML.
- **Stateless Communication**: Each request from a client to a server must contain all the information necessary to understand and complete the request. The server does not store any session context about the client.

### 2. `@RestController` vs. `@Controller`
- **`@Controller`**: Used for traditional Spring MVC web applications. Methods usually return a String representing a view template name (like an HTML/Thymeleaf view). To return data directly, methods must be annotated with `@ResponseBody`.
- **`@RestController`**: A specialized annotation that combines `@Controller` and `@ResponseBody`. It automatically serializes the return objects directly into the HTTP response body (usually JSON or plain text), making it the default choice for RESTful Web Services.

### 3. Logging vs. `System.out.println()`
Using a logging abstraction framework (SLF4J + Logback) is preferred over `System.out.println()` because:
- **Performance**: Logging frameworks use asynchronous appenders, avoiding blocking operations.
- **Levels**: Logs can be categorized (TRACE, DEBUG, INFO, WARN, ERROR). In production, you can turn off verbose debug logs without changing code.
- **Routing**: Logs can be easily redirected to files, email alerts, or log aggregation servers.
- **Context**: Automatically appends context information like timestamps, thread names, and class names.

---

## 📁 File Configuration Details

### 1. `application.properties`
- `server.port=8083`: Configures the embedded Tomcat server to bind to port 8083, avoiding conflicts with other default services on port 8080.
- `spring.application.name=spring-learn`: Registers the application name, useful for microservices registry.
- `logging.level.com.cognizant=DEBUG`: Sets the log level for classes in the `com.cognizant` package to `DEBUG`, exposing finer execution traces.

### 2. `logback.xml`
- **Logger**: Captures log events for specific packages and determines their log level.
- **Appender**: Configures the destination for log messages (e.g. `ConsoleAppender`).
- **Encoder**: Converts log events into byte arrays and writes them in a specified layout pattern (e.g., `%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n`).

---

## 🔌 HTTP Headers & Tools

### 1. HTTP Headers Explained

#### Request Headers:
- **Host**: The domain name of the server (and port) to which the request is sent.
- **Accept**: Informs the server about the media types the client can parse (e.g., `text/plain`, `application/json`).
- **User-Agent**: Information about the client browser/tool initiating the request.
- **Connection**: Controls whether the network connection stays open after the transaction finishes (e.g. `keep-alive`).

#### Response Headers:
- **Content-Type**: Informs the client about the media type of the returned body (e.g. `text/plain;charset=UTF-8`).
- **Content-Length**: The size of the response body in bytes.
- **Date**: The date and time at which the response was originated.

---

### 2. Browser Developer Tools (Network Tab)
- **Request URL**: The complete endpoint address.
- **Request Method**: The HTTP verb (e.g., `GET`).
- **Status Code**: The HTTP response status (e.g., `200 OK`).
- **Response Headers**: Headers sent by the Spring Boot server back to the browser.
- **Request Headers**: Headers sent by the browser to Spring Boot.
- **Timing**: Visual breakdown of connection time, SSL handshake, and time-to-first-byte (TTFB).

---

### 3. Postman Headers & Info
- **Request Headers**: Shows auto-generated and custom headers sent with the request.
- **Response Headers**: Lists the headers returned by the server.
- **Status**: The HTTP status code (200 OK for success).
- **Response Time**: The total time taken for the request to travel to the server and for the response to return (in milliseconds).
- **Response Size**: The size of the payload in bytes (divided into Headers and Body).

---

## ⚠️ Troubleshooting Common Errors

1. **`404 Not Found`**:
   - *Cause*: The requested URL path is incorrect or the package of the controller class is not scanned by `@SpringBootApplication`.
   - *Solution*: Double-check spelling of `/hello` in GET mapping and verify that `HelloController` is under the scanned root package (`com.cognizant.springlearn`).
2. **`405 Method Not Allowed`**:
   - *Cause*: You sent a POST/PUT/DELETE request to an endpoint mapped to `@GetMapping`.
   - *Solution*: Ensure you are using the correct HTTP method (`GET`).
3. **`Port already in use`**:
   - *Cause*: Another process is already running on port 8083.
   - *Solution*: Kill the process using port 8083, or change `server.port` in `application.properties`.

---

## 🎓 Interview Preparation Q&As

### 30 Beginner Questions
1. What is Spring Boot?
2. What is a REST API?
3. What does `@RestController` do?
4. What annotation maps HTTP GET requests?
5. What is the difference between `@Controller` and `@RestController`?
6. What is the default port of Spring Boot?
7. How do we change the port?
8. What is an embedded web server?
9. What web server does Spring Boot bundle by default?
10. What is SLF4J?
11. Why is logging preferred over `System.out.println`?
12. What does HTTP Status 200 OK mean?
13. What does HTTP Status 404 Not Found mean?
14. What is a Request Header?
15. What is a Response Header?
16. What is the role of the `Content-Type` header?
17. What is the role of the `Content-Length` header?
18. What is Jackson library used for?
19. How do you start a Spring Boot application?
20. What does the Maven clean phase do?
21. What does the Maven package phase do?
22. What is the root annotation of Spring Boot applications?
23. What are the sub-components of `@SpringBootApplication`?
24. What is a classpath?
25. Where do resources like `application.properties` reside?
26. What is the use of DevTools?
27. What is Postman?
28. What is curl?
29. What is a resource in REST?
30. What is a URI?

---

### 20 Intermediate Questions
31. How does `@RestController` serialize Java strings directly to HTTP body?
32. What is the difference between `@RequestMapping` and `@GetMapping`?
33. Explain statelessness in RESTful web services.
34. How does `spring-boot-starter-web` import Tomcat?
35. How do you configure Logback to print debug logs?
36. What is the role of `DispatcherServlet`?
37. Explain components scanning in Spring Boot.
38. What is the difference between path variables and request parameters?
39. What is an idempotent HTTP method? Name some.
40. Explain the role of the `Accept` request header.
41. What is the difference between BeanFactory and ApplicationContext?
42. How does DevTools perform hot swaps?
43. What is a Whitelabel Error Page?
44. Why does the Whitelabel Error Page appear when accessing `/`?
45. How does Spring Boot scan controllers?
46. What is the purpose of `@ResponseBody`?
47. How do you configure logging levels for specific packages?
48. What is the difference between application.properties and application.yml?
49. What is the purpose of the target folder in Maven?
50. What are transitive dependencies in Maven?

---

### 10 Advanced Questions
51. Explain the internal request lifecycle inside `DispatcherServlet`.
52. How does Spring resolve `HttpMessageConverter` class mappings?
53. What is the performance impact of using embedded Tomcat vs external Tomcat?
54. Explain classloader isolation in DevTools.
55. How does Spring Boot register Tomcat as a servlet container programmatically?
56. Explain the bootstrap sequence of `SpringApplication.run()`.
57. What is the role of `HttpMessageConverter` interface?
58. How do you configure custom response headers programmatically?
59. How does dependency mediation work in Maven POM inheritance?
60. What is the impact of Java 21 virtual threads on embedded Tomcat performance?

---

### 25 Viva Questions & Answers

1. **Q: What is the URL of the hello endpoint we created?**
   - *A*: `http://localhost:8083/hello`.
2. **Q: What is the output returned by the hello endpoint?**
   - *A*: `"Hello World!!"`.
3. **Q: What port does the hello service run on?**
   - *A*: Port 8083.
4. **Q: Which annotation is used on the HelloController class?**
   - *A*: `@RestController`.
5. **Q: What is the shortcut annotation for GET request mapping?**
   - *A*: `@GetMapping`.
6. **Q: What logging library are we using?**
   - *A*: SLF4J (API) and Logback (Implementation).
7. **Q: What does the log `START - sayHello()` indicate?**
   - *A*: That the endpoint method has started executing.
8. **Q: Why does the main method call `SpringApplication.run()`?**
   - *A*: To initialize the Spring IoC container and start the embedded Tomcat server.
9. **Q: What is the Maven command to package the project?**
   - *A*: `mvn clean package`.
10. **Q: What is the Maven command to run the project?**
    - *A*: `mvn spring-boot:run`.
11. **Q: What is the status code for a successful request?**
    - *A*: `200 OK`.
12. **Q: What happens if you make a POST request to `/hello`?**
    - *A*: You receive an `HTTP 405 Method Not Allowed` error.
13. **Q: What is the content-type returned by `/hello`?**
    - *A*: `text/plain;charset=UTF-8`.
14. **Q: What does `logging.level.com.cognizant=DEBUG` do?**
    - *A*: Enables logging debug-level details for classes within the `com.cognizant` package.
15. **Q: What is the default log level if not specified?**
    - *A*: INFO.
16. **Q: What is the purpose of Logback encoders?**
    - *A*: Transforms logging events into formatted strings.
17. **Q: What is Tomcat?**
    - *A*: An open-source web server and servlet container.
18. **Q: What is the benefit of the Maven Wrapper?**
    - *A*: Ensures consistent Maven builds across development systems without local Maven installs.
19. **Q: How do you verify the response headers in Chrome browser?**
    - *A*: Inspect page -> Network tab -> Click the `/hello` request -> View Headers panel.
20. **Q: What does `@ResponseBody` do?**
    - *A*: Tells Spring MVC to write the returned object directly to the HTTP response body.
21. **Q: What are the main folders in a standard Maven project?**
    - *A*: `src/main/java` (source code) and `src/main/resources` (configurations).
22. **Q: Why does Spring Boot support hot restart?**
    - *A*: To reduce development restart latency, provided by `spring-boot-devtools`.
23. **Q: What is client-server decoupling in REST?**
    - *A*: The client and server evolve independently; the client only needs to know resource URIs.
24. **Q: What does the `Connection: keep-alive` header do?**
    - *A*: Keeps the TCP connection open for subsequent requests, reducing latency.
25. **Q: What is a Resource?**
    - *A*: Any source of information that can be referenced by a URI.

---

## 🌟 Future Enhancements

To expand this service:
- **Service Layer**: Add `@Service` components to separate business logic from the HTTP controllers.
- **DTOs**: Return custom Java objects representing data Transfer Objects (Jackson will serialize them to JSON automatically).
- **Exception Handling**: Add `@RestControllerAdvice` and `@ExceptionHandler` to return uniform JSON errors for failures.
- **Validation**: Use `jakarta.validation` annotations (like `@NotNull`, `@Size`) to validate request parameters.
- **Database Integration**: Connect to MySQL/H2 using Spring Data JPA.
- **JWT Security**: Add Spring Security and JWT to protect endpoints.
- **API Documentation**: Integrate OpenAPI/Swagger (`springdoc-openapi-starter-webmvc-ui`) to auto-generate documentation.
