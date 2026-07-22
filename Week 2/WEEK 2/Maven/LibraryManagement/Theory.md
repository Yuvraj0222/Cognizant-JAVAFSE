# Theory & Q&A: Library Management System

This document contains detailed theoretical analysis, structural explanations, comparisons of Spring configuration styles, dependency injection mechanics, troubleshooting steps, and interview preparation questions.

---

## 📘 Spring Core Fundamentals

### 1. Inversion of Control (IoC)
Inversion of Control (IoC) is a design principle where the control of object creation, configuration, and lifecycle management is transferred from the application code to a framework container (the Spring IoC Container).
- **Without IoC**: The developer instantiates dependencies using `new` (e.g. `BookRepository repo = new BookRepository()`).
- **With IoC**: The Spring container manages bean instantiations and lifecycle, resolving dependencies at runtime.

### 2. Dependency Injection (DI)
Dependency Injection is a pattern implementing IoC where the container supplies (injects) dependent objects to a class.
- **Setter Injection**: Injects dependencies by calling setter methods after the bean is instantiated. Done using the `<property>` tag in XML (e.g. `<property name="bookRepository" ref="bookRepository"/>`).
- **Constructor Injection**: Injects dependencies by passing arguments to the constructor during bean creation. Done using the `<constructor-arg>` tag in XML.

### 3. XML Configuration
XML Configuration externalizes bean wiring from Java code. It lists bean ids, classes, scopes, and properties, allowing you to update bean relationships without modifying or recompiling the source code.

---

## ⚠️ Troubleshooting Common Errors

1. **`BeanCreationException`**:
   - *Cause*: Spring cannot instantiate a bean or inject properties (e.g., misspelled setter name or invalid class name in XML).
   - *Solution*: Verify that the property name in `<property name="bookRepository" ...>` matches the setter method signature `setBookRepository(...)` in `BookService.java`.
2. **`FileNotFoundException` (Context XML not found)**:
   - *Cause*: Spring cannot find `applicationContext.xml` on the classpath.
   - *Solution*: Ensure the XML file resides directly in the `src/main/resources/` directory.

---

## 🎓 Interview Preparation Q&As

### 30 Beginner Questions
1. What is Spring Framework?
2. What is the Spring Core Container?
3. What is a Spring Bean?
4. What is Inversion of Control (IoC)?
5. What is Dependency Injection (DI)?
6. Name the two main types of Dependency Injection.
7. What is Setter Injection?
8. What is Constructor Injection?
9. What XML tag represents a property in a Spring bean definition?
10. What attribute of the `<property>` tag is used to reference another bean?
11. What attribute of the `<property>` tag is used to inject literal values?
12. What class is used to load class path XML configurations?
13. What method retrieves a bean from the context?
14. What does the `<beans>` tag in Spring XML files represent?
15. What does the `<bean>` tag represent?
16. What is the default bean scope in Spring?
17. What is Maven?
18. What is the role of `pom.xml` in Maven?
19. What is a Maven dependency?
20. What group ID and artifact ID are used for Spring context?
21. What is Java 21?
22. Where do Java source files reside in a Maven project?
23. Where do resources like XML config files reside in Maven?
24. What does the command `mvn clean package` do?
25. Explain the difference between `ref` and `value` in property injection.
26. What does `DBMS_OUTPUT` do in database procedures (or `System.out.println` in Java)?
27. Why do we close the application context?
28. What is loose coupling?
29. What is tight coupling?
30. What is a JavaBean?

---

### 20 Intermediate Questions
31. Compare Setter Injection and Constructor Injection. When is each preferred?
32. What is the difference between BeanFactory and ApplicationContext?
33. How does Spring resolve dependencies dynamically?
34. Explain the difference between eager loading and lazy loading in Spring context.
35. How does Spring handle circular dependencies in Setter Injection?
36. Why can't Spring resolve circular dependencies in Constructor Injection?
37. What is bean scope? Explain Singleton vs Prototype.
38. Explain how Spring's XML configuration supports the Open/Closed Principle.
39. What is the role of `org.springframework:spring-context` dependency?
40. What are transitive dependencies in Maven?
41. What is classloader isolation?
42. How does Spring detect property setters using Reflection?
43. What is the role of PropertyEditors in Spring?
44. How does Spring load resources using Classpath prefixes?
45. What is the lifecycle of a Spring Bean?
46. What are BeanPostProcessors?
47. What is the difference between applicationContext.xml and application.properties?
48. What is AOP in Spring?
49. What is a servlet container?
50. What is SpEL (Spring Expression Language)?

---

### 10 Advanced Questions
51. Analyze the performance difference between Spring XML-based configurations and annotation-based configurations at startup.
52. How does Spring handle bean registration internally using BeanDefinition objects?
53. Explain the proxy creation mechanism in Spring AOP (JDK Dynamic Proxy vs CGLIB).
54. Design a custom BeanPostProcessor that logs bean creation times.
55. Explain the difference between BeanFactoryPostProcessor and BeanPostProcessor.
56. How does Spring Boot's auto-configuration eliminate the need for applicationContext.xml?
57. What is the impact of Java 21 virtual threads on Spring Core container executions?
58. How do you implement dynamic bean registration programmatically in ApplicationContext?
59. Explain the triple-caching strategy Spring uses to resolve circular singleton dependencies.
60. Compare Spring's dependency resolution with Google Guice or Dagger.

---

### 25 Viva Questions & Answers

1. **Q: What is the main class name of this project?**
   - *A*: `MainApp` (package `com.library`).
2. **Q: Which class handles data operations?**
   - *A*: `BookRepository`.
3. **Q: Which class implements business delegation?**
   - *A*: `BookService`.
4. **Q: What is the name of the Spring XML configuration file?**
   - *A*: `applicationContext.xml`.
5. **Q: Where is `applicationContext.xml` stored?**
   - *A*: In the `src/main/resources/` directory.
6. **Q: How is the BookRepository bean injected into BookService?**
   - *A*: Via property/setter injection in XML.
7. **Q: What is the setter method name in BookService?**
   - *A*: `setBookRepository(BookRepository bookRepository)`.
8. **Q: What does `MainApp` use to load the context?**
   - *A*: `ClassPathXmlApplicationContext`.
9. **Q: What are the three sample books printed?**
   - *A*: Java Programming, Spring Framework, Database Systems.
10. **Q: What is the default bean scope of `bookService` in this project?**
    - *A*: Singleton (since no scope is declared, it defaults to singleton).
11. **Q: Why is there no Spring Boot dependencies in `pom.xml`?**
    - *A*: Because this is a Spring Core XML configuration exercise running on basic Spring context libraries.
12. **Q: What compiles the project?**
    - *A*: Maven (`mvn clean package`).
13. **Q: What runs the project from terminal?**
    - *A*: `mvn exec:java -Dexec.mainClass="com.library.MainApp"`.
14. **Q: What is the type of injection used?**
    - *A*: Setter Injection.
15. **Q: Can we perform constructor injection in this project?**
    - *A*: Yes, by creating a constructor in `BookService` and replacing `<property>` with `<constructor-arg>` in XML.
16. **Q: What is the space complexity of this app?**
    - *A*: $O(1)$ auxiliary space.
17. **Q: What is the time complexity of startup?**
    - *A*: $O(B)$ where $B$ is the number of beans declared.
18. **Q: What does the `<property>` ref attribute point to?**
    - *A*: The `id` of another declared bean in the XML file.
19. **Q: What does the class attribute in the `<bean>` tag define?**
    - *A*: The fully qualified class name of the target bean.
20. **Q: What is an application context?**
    - *A*: Spring's advanced IoC container interface, inheriting BeanFactory.
21. **Q: Why is try-with-resources used to instantiate ClassPathXmlApplicationContext?**
    - *A*: To ensure the container is automatically closed when MainApp finishes, preventing memory leaks.
22. **Q: What happens if you try to get a bean with an unregistered ID?**
    - *A*: A `NoSuchBeanDefinitionException` is thrown.
23. **Q: What compiler version is targeted in `pom.xml`?**
    - *A*: Java 21.
24. **Q: Can we use `@Autowired` in this project?**
    - *A*: Not without enabling component scanning or annotation support via `<context:annotation-config/>` in XML.
25. **Q: What is the purpose of loose coupling?**
    - *A*: Allows changing class implementations (e.g. replacing BookRepository with a database implementation) without modifying the dependent service class.

---

## 🌟 Future Enhancements

To modernize this application:
- **Annotation Configuration**: Replace XML bean declarations with `@Repository` and `@Service` annotations, using `@Autowired` for dependency wiring.
- **Java Configuration**: Declare beans in a class annotated with `@Configuration` using `@Bean` methods.
- **Spring Boot**: Bootstrap using `SpringApplication.run()`, eliminating XML and manual context loading configurations entirely.
- **Database Integration**: Connect to a database (H2, MySQL) using Spring Data JPA and Hibernate to persist book entities.
