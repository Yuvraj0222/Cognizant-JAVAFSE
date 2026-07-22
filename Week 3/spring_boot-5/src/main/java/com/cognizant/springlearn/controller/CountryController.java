package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller exposing country retrieval endpoints.
 */
@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
    
    private final CountryService countryService;

    // Constructor Injection
    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    /**
     * Endpoint to retrieve a country by its code.
     * Maps GET requests on /countries/{code}.
     *
     * @param code The country code (passed in URL path).
     * @return Country object.
     */
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START - getCountry()");
        
        // Retrieve country using service layer
        Country country = countryService.getCountry(code);
        
        LOGGER.info("END - getCountry()");
        return country;
    }
}
