package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

/**
 * Main application class to bootstrap and run the spring-learn application.
 * Imports XML bean configuration file "country.xml".
 */
@SpringBootApplication
@ImportResource("classpath:country.xml")
public class SpringLearnApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
    }
}
