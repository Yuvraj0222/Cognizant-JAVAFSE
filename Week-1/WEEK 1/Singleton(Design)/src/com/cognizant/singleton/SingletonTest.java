package com.cognizant.singleton;

/**
 * Test class to verify the Singleton Pattern implementation.
 */
public class SingletonTest {

    public static void main(String[] args) {
        // Retrieve the Logger instance twice
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Print log messages using both variables
        logger1.log("Application Started");
        logger2.log("User Logged In");
        System.out.println();

        // Display the system hash codes of both references
        System.out.println("Logger1 HashCode: " + logger1.hashCode());
        System.out.println("Logger2 HashCode: " + logger2.hashCode());
        System.out.println();

        // Verify if both variables reference the exact same object in heap memory
        if (logger1 == logger2) {
            System.out.println("Both objects are the same instance.");
            System.out.println("Singleton Pattern implemented successfully.");
        } else {
            System.out.println("Error: Multiple instances of Logger detected!");
        }
    }
}
