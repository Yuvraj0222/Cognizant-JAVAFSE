package com.cognizant.loan.controller;

import com.cognizant.loan.model.Loan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller exposing Loan-related endpoints.
 */
@RestController
public class LoanController {

    /**
     * Endpoint to fetch details of a specific loan.
     * Maps GET requests on /loans/{number} to return loan details.
     *
     * @param number The loan number passed as a path variable.
     * @return Loan POJO which Spring Boot automatically serializes to JSON.
     */
    @GetMapping("/loans/{number}")
    public Loan getLoan(@PathVariable String number) {
        // Return dummy data exactly as specified in the objectives
        return new Loan(
                number,
                "Car",
                400000,
                3258,
                18
        );
    }
}
