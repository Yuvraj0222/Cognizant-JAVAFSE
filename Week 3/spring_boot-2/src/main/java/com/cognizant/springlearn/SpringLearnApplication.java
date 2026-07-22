package com.cognizant.springlearn;

import com.cognizant.springlearn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Main application class demonstrating loading Spring bean configurations from XML.
 */
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    /**
     * Loads the Spring configuration XML and retrieves the configured Country bean.
     */
    public static void displayCountry() {
        // Try-with-resources automatically closes the ApplicationContext when block exits
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            
            // Retrieve the country bean from IoC container
            Country country = context.getBean("country", Country.class);
            
            LOGGER.debug("Country : {}", country);
            
            // Print country details using getters
            LOGGER.info("Country Details");
            LOGGER.info("Code : {}", country.getCode());
            LOGGER.info("Name : {}", country.getName());
        }
    }

    public static void main(String[] args) {
        LOGGER.info("START");
        
        displayCountry();
        
        LOGGER.info("END");
    }
}
