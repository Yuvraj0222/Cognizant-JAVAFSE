package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller exposing country-related endpoints.
 */
@RestController
public class CountryController {

    // Initialize SLF4J Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    /**
     * Endpoint to retrieve the country details configured in Spring XML.
     * Maps GET requests on /country.
     *
     * @return Country POJO which Spring MVC serializes into JSON.
     */
    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public Country getCountryIndia() {
        LOGGER.info("START - getCountryIndia()");
        LOGGER.debug("Loading Country Bean from Spring XML");

        // Load country.xml using ClassPathXmlApplicationContext (closed automatically via try-with-resources)
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            
            // Retrieve bean
            Country country = context.getBean("country", Country.class);
            
            // Explicitly invoke getters inside the method to trigger SLF4J logs before the END statement
            country.getCode();
            country.getName();

            LOGGER.info("END - getCountryIndia()");
            return country;
        }
    }
}
