package com.example.jwt;

import com.example.jwt.entity.User;
import com.example.jwt.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Main Entry Point for the Spring Boot JWT Authentication Service.
 * Seeds a default user into the H2 database on startup.
 */
@SpringBootApplication
public class JwtApplication {

    public static void main(String[] args) {
        SpringApplication.run(JwtApplication.class, args);
    }

    /**
     * Seeds the in-memory H2 database with a default user on application start.
     * Enforces that passwords are NOT stored in plain text by encoding with BCrypt.
     */
    @Bean
    public CommandLineRunner initDatabase(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.findByUsername("user").isEmpty()) {
                User defaultUser = User.builder()
                        .username("user")
                        .password(passwordEncoder.encode("pwd")) // Encrypting 'pwd' with BCrypt
                        .role("ROLE_USER")
                        .build();
                userRepository.save(defaultUser);
                System.out.println(">>> SEED DATA SUCCESSFUL: Registered default user 'user' with password 'pwd' (BCrypt Encoded)!");
            } else {
                System.out.println(">>> SEED DATA SKIPPED: Default user already exists.");
            }
        };
    }
}
