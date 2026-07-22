package com.example.jwt.config;

import com.example.jwt.filter.JwtRequestFilter;
import com.example.jwt.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.Collections;

/**
 * Security Configuration for the Spring Boot application.
 * Defines the security filter chain, password encoder, and authentication manager.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    /**
     * Password Encoder Bean. Uses BCrypt strong hashing function.
     * Prevents storing passwords in plain text.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * AuthenticationManager Bean. Validates credentials provided during login.
     * Integrates JwtUserDetailsService and BCryptPasswordEncoder.
     */
    @Bean
    public AuthenticationManager authenticationManager(PasswordEncoder passwordEncoder) {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(jwtUserDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder);
        return new ProviderManager(Collections.singletonList(authProvider));
    }

    /**
     * Security Filter Chain Bean. Sets up endpoint protections and filter order.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. Disable CSRF (Cross-Site Request Forgery) since we are stateless and don't use cookies.
            .csrf(csrf -> csrf.disable())
            
            // 2. Disable Http Sessions (STATELESS) so Spring Security won't create or use HttpSession.
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            
            // 3. Set authorization rules on requests.
            .authorizeHttpRequests(auth -> auth
                // Allow access to authentication endpoint and H2 database console.
                .requestMatchers("/authenticate", "/h2-console/**").permitAll()
                // All other API endpoints must be authenticated.
                .anyRequest().authenticated()
            )
            
            // 4. Disable frame options so H2 console can render inside a browser iframe.
            .headers(headers -> headers.frameOptions(frame -> frame.disable()))
            
            // 5. Add custom JWT Request Filter to intercept and validate Bearer tokens.
            .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
