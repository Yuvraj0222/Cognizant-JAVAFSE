package com.example.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Class demonstrating basic logging using SLF4J and Logback.
 */
public class LoggingExample {

    // Configure SLF4J Logger using LoggerFactory
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        // Log one ERROR message
        logger.error("This is an error message");

        // Log one WARN message
        logger.warn("This is a warning message");
    }
}
