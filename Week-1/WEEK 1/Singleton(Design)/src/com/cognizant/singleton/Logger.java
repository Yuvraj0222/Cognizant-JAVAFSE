package com.cognizant.singleton;

/**
 * Singleton Logger utility ensuring only one instance handles logs.
 */
public class Logger {

    // Private static variable to hold the single instance of the class
    private static Logger instance;

    // Private constructor to prevent instantiation from outside the class
    private Logger() {
    }

    /**
     * Public static method providing global access to the single instance.
     * Implements lazy initialization.
     *
     * @return The single Logger instance.
     */
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    /**
     * Prints log message to the console.
     *
     * @param message The message to log.
     */
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
