package com.cognizant.springlearn.model;

import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * JavaBean representing a Country.
 */
public class Country {

    // Initialize SLF4J Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    private String code;
    private String name;

    // No-argument constructor
    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    // Parameterized constructor
    public Country(String code, String name) {
        LOGGER.debug("Inside Country Parameterized Constructor.");
        this.code = code;
        this.name = name;
    }

    // Getter and Setter for Country Code
    public String getCode() {
        LOGGER.debug("Getting Country Code.");
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("Setting Country Code.");
        this.code = code;
    }

    // Getter and Setter for Country Name
    public String getName() {
        LOGGER.debug("Getting Country Name.");
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Setting Country Name.");
        this.name = name;
    }

    // Override equals and hashCode for comparison
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Country country = (Country) o;
        return Objects.equals(code, country.code) && Objects.equals(name, country.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(code, name);
    }

    // Override toString() for logging
    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}
