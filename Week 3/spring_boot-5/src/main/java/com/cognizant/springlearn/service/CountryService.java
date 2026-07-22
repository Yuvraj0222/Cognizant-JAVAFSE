package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * Service layer to handle business logic for country retrieval.
 */
@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);
    
    // Injected country list from XML
    private final List<Country> countryList;

    // Constructor injection (Preferred over field injection)
    public CountryService(List<Country> countryList) {
        this.countryList = countryList;
    }

    /**
     * Active Implementation (Java Stream API):
     * Retrieves country matching code (case-insensitive).
     *
     * Stream Operations Explanation:
     * 1. stream(): Converts the List into a sequential stream of Country objects.
     * 2. filter(): Matches countries where code equals (ignoring case) the requested code parameter.
     * 3. findFirst(): Returns an Optional containing the first matching element.
     * 4. orElseThrow(): If Optional is empty, throws a CountryNotFoundException.
     *
     * @param code The requested country code.
     * @return Matching Country object.
     */
    public Country getCountry(String code) {
        LOGGER.info("Searching Country {}", code);

        Country country = countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> {
                    LOGGER.error("Country Not Found");
                    return new CountryNotFoundException("Country code " + code + " not found");
                });

        LOGGER.info("Country Found");
        return country;
    }

    /**
     * Traditional Implementation (Using For-Each Loop):
     * Included as reference per curriculum requirements.
     *
     * @param code The requested country code.
     * @return Matching Country object.
     */
    public Country getCountryTraditional(String code) {
        LOGGER.info("Searching Country {}", code);
        for (Country country : countryList) {
            if (country.getCode().equalsIgnoreCase(code)) {
                LOGGER.info("Country Found");
                return country;
            }
        }
        LOGGER.error("Country Not Found");
        throw new CountryNotFoundException("Country code " + code + " not found");
    }
}
