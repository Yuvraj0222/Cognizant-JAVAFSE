package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller exposing a simple Hello World endpoint.
 */
@RestController
public class HelloController {

    // Initialize SLF4J Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);

    /**
     * Exposes GET requests on /hello.
     * Logs the start and end of execution.
     *
     * @return Plain text response "Hello World!!"
     */
    @GetMapping("/hello")
    public String sayHello() {
        LOGGER.info("START - sayHello()");
        
        String response = "Hello World!!";
        
        LOGGER.info("END - sayHello()");
        return response;
    }
}
