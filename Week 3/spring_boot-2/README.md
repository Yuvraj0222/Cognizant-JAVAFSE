# Load Country from Spring Configuration XML

This is a Spring Core application that demonstrates loading bean configurations from an XML configuration file using the Spring IoC Container and ApplicationContext.

---

## 📂 Project Structure

```text
Load Country
 ├── pom.xml
 └── src
      └── main
           ├── java
           │    └── com.cognizant.springlearn
           │         ├── model
           │         │    └── Country.java
           │         └── SpringLearnApplication.java
           └── resources
                ├── country.xml
                ├── application.properties
                └── logback.xml
```

---

## ⚙️ How to Run

1. Open a terminal in the `spring_boot-2` directory:
   ```bash
   cd "Week 3/spring_boot-2"
   ```
2. Build the project using Maven:
   ```bash
   mvn clean package
   ```
3. Run the application:
   - Run the `com.cognizant.springlearn.SpringLearnApplication` class from your IDE, or run it via command line:
     ```bash
     mvn exec:java -Dexec.mainClass="com.cognizant.springlearn.SpringLearnApplication"
     ```

---

## 💻 Expected Console Output

```text
2026-07-23 03:45:00.125 INFO  c.c.springlearn.SpringLearnApplication - START
2026-07-23 03:45:00.320 DEBUG c.c.springlearn.model.Country - Inside Country Constructor.
2026-07-23 03:45:00.325 DEBUG c.cognizant.springlearn.model.Country - Setting Country Code
2026-07-23 03:45:00.325 DEBUG c.cognizant.springlearn.model.Country - Setting Country Name
2026-07-23 03:45:00.330 DEBUG c.cognizant.springlearn.model.Country - Getting Country Code
2026-07-23 03:45:00.330 DEBUG c.cognizant.springlearn.model.Country - Getting Country Name
2026-07-23 03:45:00.335 INFO  c.c.springlearn.SpringLearnApplication - Country Details
2026-07-23 03:45:00.335 INFO  c.c.springlearn.SpringLearnApplication - Code : IN
2026-07-23 03:45:00.335 INFO  c.c.springlearn.SpringLearnApplication - Name : India
2026-07-23 03:45:00.340 INFO  c.c.springlearn.SpringLearnApplication - END
```
