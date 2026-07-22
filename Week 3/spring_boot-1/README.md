# Spring Boot Fundamentals – Hands-on 1

This repository contains the complete **spring-learn** project implementing a basic Spring Boot Web application using Maven, designed for the Cognizant FSE Digital Nurture curriculum.

---

## 📂 Project Structure

```text
spring_boot-1
 ├── pom.xml
 └── src
      ├── main
      │    ├── java
      │    │    └── com.cognizant.springlearn
      │    │         └── SpringLearnApplication.java
      │    └── resources
      │         └── application.properties
      └── test
           └── java
                └── com.cognizant.springlearn
                     └── SpringLearnApplicationTests.java
```

---

## 🛠️ Step-by-Step Lab Guide

### Step 1: Spring Initializr Configuration (`https://start.spring.io`)

Spring Initializr is a web-based tool provided by the Spring team to bootstrap Spring Boot applications quickly. 

- **Project**: **Maven Project** (declares dependencies in `pom.xml` and manages the build lifecycle).
- **Language**: **Java** (source programming language).
- **Spring Boot Version**: **Latest Stable** (compatible with Java 21, e.g., `3.3.2`).
- **Group**: `com.cognizant` (defines the unique organizational namespace using reverse domain format).
- **Artifact**: `spring-learn` (defines the name of the final packaged JAR/WAR archive).
- **Name**: `spring-learn` (display name of the project).
- **Package Name**: `com.cognizant.springlearn` (the default root package for Java classes).
- **Packaging**: **Jar** (packages the application as an executable Java Archive containing the embedded web server).
- **Java Version**: **21** (defines compile-target Java SE specification).
- **Dependencies**:
  1. **Spring Web**: Builds RESTful web APIs and integrates an embedded Tomcat container.
  2. **Spring Boot DevTools**: Enforces developer-friendly overrides like live reload and auto-restart on compilation.

---

### Step 2: Extracting & Understanding Maven Wrapper

Upon generating the project, Spring Initializr bundles **Maven Wrapper** files (`mvnw`, `mvnw.cmd`, `.mvn/` directory):
- **Why Maven Wrapper exists**: It allows you to run Maven builds without having Maven pre-installed on the host operating system. Running `./mvnw clean package` automatically downloads the correct Maven version declared in wrapper configuration, ensuring build reproducibility across different environments (CI/CD pipelines, developer machines).

---

### Step 3: Maven Build Lifecycle & Phases

Build command:
```bash
mvn clean package
```

#### Maven Build Lifecycle Phases Explained:
1. **clean**: Deletes the `target/` output directory, wiping previously compiled classes and packaging.
2. **validate**: Validates that the project structure is correct and all necessary information is available.
3. **compile**: Compiles Java source files (`src/main/java`) into class files placed inside `target/classes`.
4. **test**: Executes unit tests (using JUnit) located in `src/test/java`.
5. **package**: Takes the compiled bytecode and packages it into its final distributable format (e.g., a `.jar` file in `target/`).
6. **verify**: Runs integration tests and checks the packaged archive against quality criteria.
7. **install**: Copies the packaged JAR to the local Maven repository (`~/.m2/repository`) for use as a dependency in other local projects.
8. **deploy**: Copies the final package to a remote Maven repository (e.g., Nexus or Artifactory) to share with other developers.

---

### Step 4: Eclipse Import Method

To import the project into Eclipse IDE:
1. Open Eclipse -> Select **File** -> **Import...**
2. Choose **Maven** -> **Existing Maven Projects** -> Click **Next**.
3. Browse and select the root directory (`spring_boot-1`).
4. Select the detected `pom.xml` -> Click **Finish**.

**What Eclipse does internally**: It reads `pom.xml` to build the classpath, downloads required JARs from the Maven Central repository, sets up the Java Build Path, and structures the project view according to Maven directory standards.

---

### Step 5: Directory Breakdown

- **`src/main/java`**: Holds the production Java source code files.
- **`src/main/resources`**: Stores configuration properties, HTML templates, static files, and SQL schemas.
- **`application.properties`**: Externalizes environment-specific configurations (port, database details, logging levels).
- **`src/test/java`**: Holds JUnit unit and integration tests.
- **`target/`**: Compiled output directory created by Maven during build phases.

---

### Step 6: `@SpringBootApplication` Annotation Breakdown

The `@SpringBootApplication` annotation on `SpringLearnApplication` is a convenience annotation that wraps three core annotations:

1. **`@Configuration`**: Marks the class as a source of bean definitions for the application context. It allows configuring Spring beans using `@Bean` methods.
2. **`@EnableAutoConfiguration`**: Instructs Spring Boot to scan the classpath and auto-configure beans matching detected libraries (e.g., starting an embedded Tomcat server because `spring-boot-starter-web` is on the classpath).
3. **`@ComponentScan`**: Directs Spring to scan for components, configurations, and services (annotated with `@Component`, `@Service`, `@Repository`, `@RestController`) starting from the current package (`com.cognizant.springlearn`) and its sub-packages.

---

### Step 7: Main Method & `SpringApplication.run()` Execution

When `SpringApplication.run(SpringLearnApplication.class, args)` is executed:
1. **Bootstrap SpringApplication**: Initializes the Spring context.
2. **IOC Container Setup**: Starts the ApplicationContext (usually `AnnotationConfigServletWebServerApplicationContext` for web applications).
3. **Component Scanning**: Finds and registers beans in the package.
4. **Auto-Configuration**: Instantiates beans automatically (like datasource, security filters, or JSON converters) based on detected libraries.
5. **Start Embedded Tomcat**: Starts an internal Tomcat server in-process on the configured port (`8080`), binding servlet mappings.
6. **Logging**: Outputs framework startup diagnostics.

---

### Step 8: `pom.xml` Dependency Management

- **`spring-boot-starter-parent`**: The parent POM providing dependency version management, default compiler settings, and build plugin configurations.
- **`spring-boot-starter-web`**: Starter dependency containing Spring Web, Spring MVC, Jackson JSON serializer, and the embedded Tomcat server.
- **`spring-boot-devtools`**: Provides hot reloading, live reloading, and disables template cache properties.
- **`spring-boot-starter-test`**: Contains testing libraries like JUnit 5, Mockito, AssertJ, and Hamcrest.

#### Dependency Hierarchy & Transitive Dependencies:
- A **Transitive Dependency** occurs when project `A` depends on library `B`, and library `B` internally depends on library `C`. Maven automatically resolves this and downloads library `C`.
- **`spring-boot-starter-web`** dependency tree:
  ```text
  spring-boot-starter-web
   └── spring-boot-starter (core configuration and logging)
   └── spring-boot-starter-json (Jackson JSON serializer)
   └── spring-boot-starter-tomcat (embedded web server)
   └── spring-web (core web components)
   └── spring-webmvc (MVC dispatchers)
        └── spring-core (framework utilities)
        └── spring-context (IOC context)
        └── spring-beans (bean factory)
        └── spring-expression (SpEL expression parser)
  ```

---

## ⚡ Running the Application

### Method 1: Command Line (Maven)
Navigate to `Week 3/spring_boot-1` and run:
```bash
mvn spring-boot:run
```

### Method 2: Eclipse
Right-click on `SpringLearnApplication.java` -> **Run As** -> **Spring Boot App**.

---

## 🧪 Testing Outputs

### 1. Expected Console Output
```text
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_|\__, | / / / /
 =========|_|==============|___/=/_/_/_/

2026-07-23 03:40:01.120  INFO 12345 --- [main] c.c.s.SpringLearnApplication            : Application Started
2026-07-23 03:40:02.450  INFO 12345 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2026-07-23 03:40:02.455  INFO 12345 --- [main] c.c.s.SpringLearnApplication            : Started SpringLearnApplication in 1.85 seconds (JVM running for 2.3)
2026-07-23 03:40:02.460  INFO 12345 --- [main] c.c.s.SpringLearnApplication            : Application Finished Initialization
```

### 2. Expected Browser Output
Open your browser and go to [http://localhost:8080](http://localhost:8080).

**Why the Whitelabel Error Page appears (HTTP 404)**:
It is a default fallback page generated by Spring Boot. Since we did not implement any REST Controller mapped to the root path `/`, the DispatcherServlet searches for a handler, finds none, and forwards the request to `/error` which renders this page. It confirms that the Tomcat server is running and Spring Boot is responsive!

---

## ⚠️ Common Errors & Fixes

1. **`Port already in use` (`BindException`)**:
   - *Cause*: Another process is running on port 8080.
   - *Fix*: Stop the other application, or edit `application.properties` to set `server.port=8082`.
2. **`Java version mismatch`**:
   - *Cause*: The project is configured for Java 21, but your system environment runs Java 17 or lower.
   - *Fix*: Update your `JAVA_HOME` environment variable or JDK version in your IDE build path.
3. **`No main manifest attribute`**:
   - *Cause*: Running the JAR file, but the `maven-plugin` failed to declare the entry class in `META-INF/MANIFEST.MF`.
   - *Fix*: Ensure `spring-boot-maven-plugin` is added inside `<build><plugins>` in `pom.xml`.

---

## 🎓 Interview Prep & Q&As

### 30 Beginner Questions
1. What is Spring Initializr?
2. What is the role of `pom.xml`?
3. What does `@SpringBootApplication` do?
4. What is the default port of Spring Boot?
5. How can we change the port?
6. What is the advantage of an embedded server?
7. What is Maven?
8. Explain the difference between compile and package.
9. What is a starter dependency?
10. What is a transitive dependency?
11. What is the difference between JAR and WAR?
12. What does `mvn clean` do?
13. How do you run a Spring Boot application using Maven?
14. What is the role of `application.properties`?
15. What is the role of `spring-boot-devtools`?
16. What logging library does Spring Boot use by default?
17. What is an IOC Container?
18. What is a Spring Bean?
19. What is the root directory in Maven project?
20. What does `@ComponentScan` scan?
21. What does `@EnableAutoConfiguration` do?
22. What is SLF4J?
23. What is Lombok?
24. What is the role of `spring-boot-starter-test`?
25. How do you import a Maven project into Eclipse?
26. What does HTTP Status 404 mean?
27. Why do we see the Whitelabel Error Page?
28. What is DispatcherServlet?
29. What is components scanning package scope?
30. Where does Maven download dependencies?

---

### 20 Intermediate Questions
31. How does Spring Boot auto-configure Web MVC?
32. What is the difference between `@Configuration` and `@Component`?
33. Explain the Spring Boot Application startup sequence.
34. What is Maven Wrapper and why is it useful?
35. How does DevTools perform class reloading?
36. What is the default scope of a Spring Bean?
37. Explain the difference between `mvn install` and `mvn deploy`.
38. How is the default port 8080 configured in Spring Boot?
39. What is dependency management in pom.xml?
40. How do you resolve dependency conflicts in Maven?
41. What is the purpose of `@SpringBootTest`?
42. How does Spring Boot integrate logging configuration?
43. What is the difference between application.properties and application.yml?
44. How does auto-configuration resolve conditions?
45. Explain `@ConditionalOnClass` annotation.
46. What is a servlet container?
47. How do you exclude a specific auto-configuration?
48. What is the build target folder in Maven?
49. How do you pass active profiles?
50. What is resource filtering in Maven?

---

### 10 Advanced Questions
51. Explain the internal working of `SpringApplication.run()`.
52. How does Spring Boot load and parse `application.properties`?
53. What is the difference between `BeanFactory` and `ApplicationContext`?
54. How does classloader isolation work in Spring Boot DevTools?
55. Explain custom starter creation in Spring Boot.
56. How does Spring Boot register servlets dynamically?
57. Explain conditional bean creation mechanism.
58. What is the role of `SpringFactoriesLoader`?
59. How does dependency mediation work in Maven?
60. Explain the compilation changes when switching Java 17 to Java 21 in Spring Boot.

---

### 25 Viva Questions with Answers

1. **Q: What is the main class name of this project?**
   - *A*: `SpringLearnApplication`.
2. **Q: What does `@SpringBootApplication` combine?**
   - *A*: `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`.
3. **Q: Which logging system are we using?**
   - *A*: SLF4J with Logback backend.
4. **Q: On what port does Tomcat start?**
   - *A*: Port 8080.
5. **Q: What is the Maven phase to compile code?**
   - *A*: `compile`.
6. **Q: What folder stores compiled classes?**
   - *A*: `target/classes/`.
7. **Q: Why does the JUnit test class not have any code?**
   - *A*: To check that the Spring context starts without exceptions.
8. **Q: What is the default namespace of this project?**
   - *A*: `com.cognizant.springlearn`.
9. **Q: What is the Maven phase to clear targets?**
   - *A*: `clean`.
10. **Q: What is the purpose of `server.port`?**
    - *A*: Specifies the port Tomcat should bind to.
11. **Q: What does the `mvnw` file represent?**
    - *A*: Maven Wrapper script for Unix/Linux systems.
12. **Q: What does `mvnw.cmd` represent?**
    - *A*: Maven Wrapper script for Windows systems.
13. **Q: How does Spring Boot know it needs to run Tomcat?**
    - *A*: Because `spring-boot-starter-web` is on the classpath.
14. **Q: What is the Maven packaging type configured?**
    - *A*: JAR.
15. **Q: What is the parent POM for Spring Boot applications?**
    - *A*: `spring-boot-starter-parent`.
16. **Q: What is a transitive dependency?**
    - *A*: A dependency that is pulled automatically because another library depends on it.
17. **Q: How does components scan determine package directories?**
    - *A*: By default, it scans the package containing the main class and all its sub-packages.
18. **Q: What does the `@Test` annotation denote?**
    - *A*: Marks the method as a JUnit test case.
19. **Q: What is the output format of Maven packaging?**
    - *A*: A single JAR containing all compiled classes and libraries.
20. **Q: What does `mvn spring-boot:run` do?**
    - *A*: Compiles the code and launches the application inside Tomcat.
21. **Q: What does the warning "Whitelabel Error Page" mean?**
    - *A*: The request reached Spring Boot, but no controller mappings exist for the URL path.
22. **Q: Where does Maven download files?**
    - *A*: Into the `.m2/repository` local user directory.
23. **Q: What is the command to compile, test, and package?**
    - *A*: `mvn package`.
24. **Q: What is `logging.level.root=INFO`?**
    - *A*: Sets the default log level threshold to INFO for all loggers.
25. **Q: Can we run multiple Spring Boot applications on port 8080?**
    - *A*: No, port conflicts will prevent Tomcat from starting.
