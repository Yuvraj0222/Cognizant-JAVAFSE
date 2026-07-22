package com.example.jwt.controller;

import com.example.jwt.model.AuthenticationResponse;
import com.example.jwt.service.JwtUserDetailsService;
import com.example.jwt.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

/**
 * REST Controller for Authentication and Testing Protected Endpoints.
 */
@RestController
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    /**
     * Endpoint to authenticate users using Basic Auth credentials.
     * Decodes the Authorization header, validates credentials, and returns a JWT.
     *
     * @param authorizationHeader The 'Authorization' header from the request.
     * @return AuthenticationResponse containing the JWT token.
     */
    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader(value = "Authorization", required = false) String authorizationHeader) {
        
        // 1. Verify Authorization header presence and format (Basic <Base64>)
        if (authorizationHeader == null || !authorizationHeader.startsWith("Basic ")) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Missing or invalid Authorization header");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }

        try {
            // 2. Decode the Base64 username:password string
            String base64Credentials = authorizationHeader.substring(6);
            byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

            // Split credentials into username and password
            String[] values = credentials.split(":", 2);
            if (values.length != 2) {
                throw new IllegalArgumentException("Invalid basic authentication format");
            }
            String username = values[0];
            String password = values[1];

            // 3. Authenticate using Spring Security's AuthenticationManager
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

            // 4. Load user details to generate the token
            final UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            final String jwt = jwtUtil.generateToken(userDetails);

            // 5. Return token as JSON
            return ResponseEntity.ok(new AuthenticationResponse(jwt));

        } catch (BadCredentialsException | UsernameNotFoundException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Invalid username or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Authentication failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    /**
     * A protected test endpoint to verify the JWT authorization works.
     * Accessible only with a valid Bearer Token.
     */
    @GetMapping("/api/test")
    public ResponseEntity<Map<String, Object>> testProtectedApi() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "SUCCESS");
        response.put("message", "Hello! You have successfully accessed a protected API using JWT Authentication.");
        response.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(response);
    }
}
