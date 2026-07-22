# Theory & Q&A: Load Country from Spring Configuration XML

This document contains detailed explanations of the Spring Core concepts covered in this hands-on lab, along with troubleshooting guides, interview questions, and viva questions.

---

## 📘 Spring Core Concepts

### 1. Spring IoC (Inversion of Control)
Inversion of Control (IoC) is a design principle where the control of object creation, configuration, and lifecycle management is transferred from the application code to a container or framework (in this case, the Spring IoC Container).
- **Without IoC**: The developer manually instantiates dependencies using the `new` keyword (e.g. `Country country = new Country()`).
- **With IoC**: The container instantiates, configures, and manages the bean lifecycles.

### 2. Dependency Injection (DI)
Dependency Injection is a pattern implementing IoC where the container supplies (injects) the required dependencies of a bean at runtime.
- **Setter Injection**: Injects dependencies by invoking setter methods after the bean is instantiated. Done using the `<property>` tag in XML.
- **Constructor Injection**: Injects dependencies by passing arguments to the constructor during bean instantiation. Done using the `<constructor-arg>` tag in XML.

### 3. BeanFactory vs. ApplicationContext

| Feature | BeanFactory | ApplicationContext |
| :--- | :--- | :--- |
| **Instantiation** | Lazy loading (creates beans only when `getBean()` is called). | Eager loading (creates all singleton beans immediately on startup). |
| **Enterprise Features** | Basic IoC/DI container support. | Includes AOP integration, message resource handling (i18n), and event publication. |
| **Use Case** | Lightweight; suitable for resource-constrained devices. | Highly recommended for enterprise applications. |

### 4. Bean Scopes
- **Singleton (Default)**: Spring IoC container creates a single instance of the bean per container context. Every request for the bean returns the same instance.
- **Prototype**: Spring IoC container creates a new instance of the bean every time it is requested.

### 5. XML Configuration: Advantages & Disadvantages
- **Advantages**:
  - Loose Coupling: Separates configuration settings from the compiled Java classes.
  - Centralized Control: You can inspect all beans and dependencies in a single XML file.
  - No recompilation: Modifying properties in XML does not require compiling the Java code.
- **Disadvantages**:
  - Verbose: Requires writing extensive XML tags, which grows rapidly as applications expand.
  - Runtime errors: Errors like class spelling mistakes or property mismatches are only caught at runtime, not compile-time.

---

## ⚙️ Bean Lifecycle

The lifecycle stages of a Spring Bean configured via XML:
1. **Instantiation**: The container instantiates the bean (calling the default constructor).
2. **Property Injection**: The container injects bean properties (calling the setter methods).
3. **Initialization**: Custom initialization callbacks are executed.
4. **Usage**: The bean is used by the application code.
5. **Destruction**: The container is closed, and destruction callbacks are executed to release resources.

---

## ⚠️ Troubleshooting Common Errors

1. **`BeanDefinitionStoreException`**:
   - *Cause*: Spring cannot read or parse the XML configuration file due to bad formatting, tag mismatches, or invalid XML structure.
   - *Solution*: Verify the XML syntax and ensure namespaces are correct.
2. **`NoSuchBeanDefinitionException`**:
   - *Cause*: You requested a bean ID in code that is not declared in the XML (e.g., `context.getBean("countryX")`).
   - *Solution*: Double-check spelling of bean IDs in `country.xml` and the `context.getBean()` call.
3. **`ClassNotFoundException`**:
   - *Cause*: The class attribute in the `<bean>` tag is incorrect or misspelled (e.g., `class="com.cognizant.Country"` instead of `com.cognizant.springlearn.model.Country`).
   - *Solution*: Ensure the class package paths are fully qualified and correct.
4. **`FileNotFoundException` / `File Not Found`**:
   - *Cause*: Spring cannot locate the `country.xml` file on the classpath.
   - *Solution*: Ensure the XML file resides in the root of `src/main/resources`.

---

## 🎓 Interview Preparation Q&As

### 30 Beginner Questions
1. **What is Spring Framework?**
   - An open-source application framework providing comprehensive infrastructure support for developing Java applications.
2. **What is the core container of Spring?**
   - Composed of Core, Beans, Context, and Expression Language modules.
3. **What is a Spring Bean?**
   - An object managed by the Spring IoC container.
4. **Name the two types of IoC containers.**
   - BeanFactory and ApplicationContext.
5. **What does the `<beans>` tag in Spring XML denote?**
   - The root tag that wraps all bean definitions in the configuration file.
6. **What is the function of the `<bean>` tag?**
   - Declares a single bean instance to be managed by the Spring IoC container.
7. **What is the `id` attribute of the `<bean>` tag?**
   - A unique identifier for the bean in the container.
8. **What is the `class` attribute of the `<bean>` tag?**
   - Specifies the fully qualified name of the Java class.
9. **How do you set properties in a bean using XML?**
   - Using the `<property>` tag to specify name and value (Setter Injection).
10. **What is the default bean scope in Spring?**
    - Singleton.
11. **How do you configure a prototype scope in XML?**
    - Set `<bean scope="prototype" ...>`.
12. **What is constructor injection?**
    - Injecting dependencies through constructor arguments using the `<constructor-arg>` tag.
13. **Why do we need JavaBean conventions?**
    - Standardized naming (getters/setters) enables frameworks like Spring to perform reflection-based property injection.
14. **What is SLF4J?**
    - Simple Logging Facade for Java. An abstraction layer for various logging frameworks (Logback, Log4j).
15. **Why do we use logging over `System.out.println`?**
    - Logging provides different thresholds (DEBUG, INFO, ERROR), file rotation, custom output formatting, and is non-blocking.
16. **What is Logback?**
    - A high-performance logging framework designed as the successor to Log4j, implementing the SLF4J API natively.
17. **What is the root logger level in our `logback.xml`?**
    - INFO.
18. **Which class is used to load classpath XML configuration?**
    - `ClassPathXmlApplicationContext`.
19. **What is the purpose of closing the ApplicationContext?**
    - Frees resources and triggers destruction lifecycle phases for managed beans.
20. **What does Maven's `mvn clean install` command do?**
    - Cleans target folder, compiles classes, runs tests, packages the JAR, and installs it in the local repo.
21. **What are the properties in `application.properties` used for?**
    - External configuration settings for Spring applications.
22. **What is loose coupling?**
    - Design pattern where components are independent of one another.
23. **What is a fully qualified class name?**
    - A package path combined with the class name (e.g. `com.cognizant.springlearn.model.Country`).
24. **How does Spring find `country.xml`?**
    - It searches the application's classpath (mapped under `src/main/resources`).
25. **What is the purpose of `<property name="code" value="IN"/>`?**
    - Instructs Spring to invoke the `setCode("IN")` method.
26. **What is Spring Core?**
    - The module providing the foundational elements of IoC and Dependency Injection.
27. **What is Dependency Injection?**
    - Injects dependent objects into a bean rather than having the bean instantiate them itself.
28. **What does the command `mvn exec:java` do?**
    - Runs a specific Java main class from the command line using Maven configurations.
29. **Can a singleton bean contain mutable state?**
    - It is not recommended because it is shared across all threads and can lead to thread-safety issues.
30. **What is the default package directory for resources in Maven?**
    - `src/main/resources/`.

---

### 20 Intermediate Questions

31. **Explain the difference between setter and constructor injection.**
    - Setter injection allows optional dependencies and properties mutation; constructor injection enforces mandatory dependencies and immutability.
32. **Why does Spring require a default no-argument constructor for XML beans?**
    - Spring first instantiates the bean using reflection (calling the no-arg constructor) and then injects properties using setters.
33. **Explain the `additivity` flag in `logback.xml`.**
    - If `additivity="false"`, the logger writes messages to its own appender and does not propagate logs to parent loggers (like root).
34. **What is the purpose of ClassPathXmlApplicationContext's close method?**
    - Triggers the destruction callbacks on singleton beans and releases system resources.
35. **What happens if a property in XML does not have a corresponding setter method in Java?**
    - A `BeanCreationException` wrapping a `NotWritablePropertyException` is thrown.
36. **How does Spring handle type conversion (e.g., String in XML to double in POJO)?**
    - Using registered PropertyEditors or ConversionService inside the application context.
37. **Can you inject an empty string or null value in XML?**
    - Yes, using `<value></value>` for empty strings, and `<null/>` tag for null values.
38. **Explain the Spring IoC Bean Lifecycle phases.**
    - Instantiation -> Populate Properties -> Aware interfaces -> BeanPostProcessors (Pre-init) -> Init-method -> BeanPostProcessors (Post-init) -> Usage -> Destruction.
39. **What is the role of `BeanPostProcessor`?**
    - Intercepts bean creation to modify or wrap beans before/after initialization callbacks.
40. **How can you reference another bean inside a `<bean>` property?**
    - Using the `ref` attribute (e.g. `<property name="dependency" ref="otherBean"/>`).
41. **What is eager loading in ApplicationContext?**
    - Instantiating all singleton beans on startup to fail fast if configuration errors exist.
42. **Why is constructor injection preferred for mandatory dependencies?**
    - Guarantees the object is never initialized in an invalid/incomplete state.
43. **What is the difference between AOP and IoC?**
    - IoC manages object dependencies; AOP modularizes cross-cutting concerns (logging, security) by intercepting calls.
44. **What is the purpose of Logback's `ConsoleAppender`?**
    - Redirects log events to the console terminal (`System.out` or `System.err`).
45. **What is XML namespace (`xmlns`) validation?**
    - Ensures that the XML tags match schema definitions configured in Spring XSDs.
46. **What is the default logging level of Logback if not configured?**
    - DEBUG.
47. **How does Spring resolve bean scopes dynamically?**
    - Resolves via Scope implementations registered in the context.
48. **Can you configure multiple XML files in ClassPathXmlApplicationContext?**
    - Yes, by passing an array of strings: `new ClassPathXmlApplicationContext("beans1.xml", "beans2.xml")`.
49. **What is a bean alias in Spring XML?**
    - Provides alternative names for a bean using the `<alias>` tag.
50. **What is the difference between local and remote Maven repositories?**
    - Local is on your computer (`~/.m2`); remote is shared over network (Nexus, Maven Central).

---

### 10 Advanced Questions

51. **How does Spring internally resolve circular dependencies in singleton beans?**
    - Using three-level caches (`singletonObjects`, `earlySingletonObjects`, `singletonFactories`) allowing reference sharing before property validation.
52. **Explain the inner workings of ClassPathXmlApplicationContext.**
    - It reads the XML resource, parses it via `XmlBeanDefinitionReader`, registers definitions in the `BeanDefinitionRegistry`, and instantiates beans via reflection.
53. **How does Spring Boot eliminate the need for `country.xml`?**
    - By using auto-configuration and component scanning. `@Configuration` classes declare beans using `@Bean` methods, or components are automatically detected via annotations.
54. **Explain how `@Component` is scanned by `@ComponentScan`.**
    - The ComponentScan registrar scans classes on the classpath, filters classes with `@Component` meta-annotations, and registers them as BeanDefinitions.
55. **How does Spring's property placeholder resolution work (`${property.name}`)?**
    - Resolves via `PropertySourcesPlaceholderConfigurer` bean which parses placeholders using the active environment properties.
56. **What is the difference between `BeanFactoryPostProcessor` and `BeanPostProcessor`?**
    - `BeanFactoryPostProcessor` runs first to modify bean definitions (before instances are created); `BeanPostProcessor` runs after instances are created to configure them.
57. **Explain the role of `Aware` interfaces in bean lifecycle.**
    - Interfaces like `BeanFactoryAware` or `ApplicationContextAware` allow beans to receive a callback reference to the managing container.
58. **How does Spring resolve JVM reflection limitations during bean instantiation?**
    - Uses caching of constructor meta-data and generates reflective calls dynamically to optimize performance.
59. **Why can't circular dependencies be resolved using constructor injection?**
    - Because the constructor arguments of bean A require B to exist, and B requires A to exist, leading to a loop where neither constructor can execute.
60. **How does Logback integrate with SLF4J dynamically at runtime?**
    - SLF4J uses ServiceProvider discovery (`StaticLoggerBinder` or SPI) to bind to Logback classpath implementations automatically.

---

### 25 Viva Questions & Answers

1. **Q: What is the target of this hands-on lab?**
   - *A*: To load the `Country` bean configuration values (IN, India) from the `country.xml` file using Spring ApplicationContext.
2. **Q: Where is the `country.xml` file located?**
   - *A*: Inside the `src/main/resources` folder.
3. **Q: What are the two fields of the Country class?**
   - *A*: `code` and `name`.
4. **Q: Which interface is implemented by ClassPathXmlApplicationContext?**
   - *A*: The `ApplicationContext` interface.
5. **Q: How does Spring set the properties code and name in Country?**
   - *A*: By calling `setCode("IN")` and `setName("India")` (Setter Injection).
6. **Q: What is printed on the console when the Country constructor is called?**
   - *A*: `"Inside Country Constructor."` at DEBUG level.
7. **Q: What is the log message inside `setCode`?**
   - *A*: `"Setting Country Code"`.
8. **Q: What is the purpose of `logback.xml`?**
   - *A*: To configure the logging formats, log levels, and destination appenders.
9. **Q: How do we get the Country bean from ApplicationContext?**
   - *A*: By using the method `context.getBean("country", Country.class)`.
10. **Q: What is the logging framework backing SLF4J in this project?**
    - *A*: Logback.
11. **Q: Why do we use try-with-resources for the context?**
    - *A*: It automatically closes the ClassPathXmlApplicationContext at the end of the block, preventing resource leaks.
12. **Q: What does Maven use `pom.xml` for?**
    - *A*: To manage dependencies (Spring Core, Logback) and compilation settings.
13. **Q: What is the package name of the main class?**
    - *A*: `com.cognizant.springlearn`.
14. **Q: What scope does the country bean have in `country.xml`?**
    - *A*: Singleton scope (since no scope is declared, it defaults to singleton).
15. **Q: Why does the country constructor log print before setters?**
    - *A*: Because an object must be instantiated first before its properties can be populated.
16. **Q: What is the purpose of the `<property>` tag?**
    - *A*: Inject values into JavaBean properties using setter methods.
17. **Q: What is BeanFactory?**
    - *A*: The parent container interface of ApplicationContext providing basic DI support.
18. **Q: What is the advantage of externalizing configurations?**
    - *A*: Allows changing configuration parameters (like country code) without rebuilding the Java source code.
19. **Q: What is the Java compiler target version specified in `pom.xml`?**
    - *A*: Java 21.
20. **Q: What is log level hierarchy from lowest to highest?**
    - *A*: TRACE < DEBUG < INFO < WARN < ERROR.
21. **Q: What is an Appender in Logback?**
    - *A*: The output handler responsible for writing log messages to destinations (Console, File, Socket).
22. **Q: Can you define multiple beans in one XML file?**
    - *A*: Yes, by declaring multiple `<bean>` tags inside the parent `<beans>` tag.
23. **Q: What is the purpose of the `toString` override?**
    - *A*: Formats the object data in readable text when logging the Country instance.
24. **Q: What happens if `country.xml` is missing?**
    - *A*: A `FileNotFoundException` is thrown inside a `BeanDefinitionStoreException`.
25. **Q: What does the log pattern `%d{yyyy-MM-dd HH:mm:ss.SSS}` define?**
    - *A*: The format of the date and timestamp prepended to log statements.

---

## 🌟 Replacing XML with Annotations & Java Config

To modernize this application:
1. **Java Configuration**:
   Create a `@Configuration` class to declare the bean:
   ```java
   @Configuration
   public class AppConfig {
       @Bean
       public Country country() {
           return new Country("IN", "India");
       }
   }
   ```
2. **Annotation Configuration**:
   Annotate the `Country` class with `@Component` and set properties using `@Value`:
   ```java
   @Component("country")
   public class Country {
       @Value("${country.code:IN}")
       private String code;
       @Value("${country.name:India}")
       private String name;
   }
   ```
3. **Auto-Configuration (Spring Boot)**:
   Place the components under scanning path, and Spring Boot will automatically find, instantiate, and configure the beans using embedded context bootstrap.
