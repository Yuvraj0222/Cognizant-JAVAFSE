package com.cognizant.springlearn.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Global exception handler for controllers.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Intercepts CountryNotFoundException and returns a formatted JSON response with HTTP 404 Status.
     *
     * @param ex The thrown exception.
     * @return Response entity containing error payload.
     */
    @ExceptionHandler(CountryNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleCountryNotFound(CountryNotFoundException ex) {
        Map<String, Object> body = new LinkedHashMap<>();
        
        body.put("timestamp", LocalDateTime.now().toString());
        body.put("status", HttpStatus.NOT_FOUND.value());
        body.put("error", "Country Not Found");
        body.put("message", ex.getMessage());

        return new ResponseEntity<>(body, HttpStatus.NOT_FOUND);
    }
}
