package com.cognizant.springlearn.exception;

/**
 * Custom runtime exception thrown when a requested country is not found in the configuration list.
 */
public class CountryNotFoundException extends RuntimeException {

    public CountryNotFoundException(String message) {
        super(message);
    }
}
