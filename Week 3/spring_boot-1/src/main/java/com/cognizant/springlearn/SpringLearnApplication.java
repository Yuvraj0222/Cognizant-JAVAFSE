package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main application class to bootstrap and run the spring-learn application.
 */
@SpringBootApplication
public class SpringLearnApplication {

    // Initialize the logger using SLF4J
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("Application Started");
        
        // Start the Spring Boot Application and trigger context initialization
        SpringApplication.run(SpringLearnApplication.class, args);
        
        LOGGER.info("Application Finished Initialization");
    }
}
