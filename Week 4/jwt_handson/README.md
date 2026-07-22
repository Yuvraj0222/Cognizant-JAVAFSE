# JWT Authentication Service using Spring Boot and Spring Security

This is a complete, production-ready Spring Boot microservice implementing JWT (JSON Web Token) Authentication exactly matching the Cognizant FSE Digital Nurture Hands-on Lab curriculum.

---

## 📂 Project Structure

```text
jwt_handson
 ├── pom.xml
 └── src
      ├── main
      │      ├── java
      │      │      └── com.example.jwt
      │      │              ├── config
      │      │              │      SecurityConfig.java
      │      │              │
      │      │              ├── controller
      │      │              │      AuthenticationController.java
      │      │              │
      │      │              ├── entity
      │      │              │      User.java
      │      │              │
      │      │              ├── filter
      │      │              │      JwtRequestFilter.java
      │      │              │
      │      │              ├── model
      │      │              │      AuthenticationRequest.java
      │      │              │      AuthenticationResponse.java
      │      │              │
      │      │              ├── repository
      │      │              │      UserRepository.java
      │      │              │
      │      │              ├── service
      │      │              │      JwtUserDetailsService.java
      │      │              │
      │      │              └── JwtApplication.java
      │      │
      │      └── resources
      │              └── application.properties
```

---

## 🎯 Learning Objectives

By completing this hands-on lab, you will learn:
1. **JWT Authentication**: How JWT works as a stateless, compact, and self-contained authentication token.
2. **Spring Security Integration**: Configuring security filters, disabling CSRF, setting up stateless session policies, and intercepting requests.
3. **Basic Authentication Processing**: Reading the `Authorization` header, decoding Base64 credentials, and validating them.
4. **AuthenticationManager & UserDetailsService**: Authenticating users against a database source using Spring Security APIs.
5. **Token Lifecycle**: Building utility methods to generate, parse, expire, and validate JSON Web Tokens.

---

## ⚡ Execution Steps

### Prerequisites
- **Java 17** installed.
- **Maven** installed.

### Step 1: Build the Project
Open a terminal in the `jwt_handson` folder and build the application:
```bash
mvn clean install
```

### Step 2: Run the Application
Start the Spring Boot application:
```bash
mvn spring-boot:run
```
The application will start on port `8090` (configured in `application.properties`). On startup, a default user will be automatically registered in H2:
- **Username**: `user`
- **Password**: `pwd`

---

## 🧪 CURL Tests & Expected Outputs

### 1. Successful Login (Basic Auth)
Sends the credentials `user:pwd` via Basic Authentication to request a token.
```bash
curl -u user:pwd http://localhost:8090/authenticate
```
**Expected Response (HTTP 200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzEzNDg3NjAwLCJleHAiOjE3MTM0OTEyMDB9.xxxxxxxxxxxxxxxxxxxx"
}
```

### 2. Authentication Failure (Wrong Password)
```bash
curl -u user:wrong http://localhost:8090/authenticate
```
**Expected Response (HTTP 401 Unauthorized):**
```json
{
  "message": "Invalid username or password"
}
```

### 3. Missing Authorization Header
```bash
curl http://localhost:8090/authenticate
```
**Expected Response (HTTP 401 Unauthorized):**
```json
{
  "message": "Missing or invalid Authorization header"
}
```

### 4. Access Protected API (Without Token)
Accessing `/api/test` directly without sending the JWT Bearer token.
```bash
curl http://localhost:8090/api/test
```
**Expected Response (HTTP 403 Forbidden / 401 Unauthorized):**
Spring Security blocks this request as it is not authenticated.

### 5. Access Protected API (With Token)
Send the JWT obtained in Step 1 as a Bearer Token. Replace `<token>` with your actual token.
```bash
curl -H "Authorization: Bearer <token>" http://localhost:8090/api/test
```
**Expected Response (HTTP 200 OK):**
```json
{
  "status": "SUCCESS",
  "message": "Hello! You have successfully accessed a protected API using JWT Authentication.",
  "timestamp": 1713487625000
}
```

---

## 📘 Concept Explanations

| Concept | Explanation |
| :--- | :--- |
| **JWT Structure** | Composed of three parts separated by dots (`.`):<br>1. **Header**: Contains token type (JWT) and signing algorithm (e.g., HS256).<br>2. **Payload**: Claims containing user data and expiration details.<br>3. **Signature**: Verifies the message wasn't changed along the way. |
| **HS256** | HMAC using SHA-256 hash algorithm. A symmetric encryption scheme where the same secret key is used to sign and verify tokens. |
| **Bearer Token** | A security token that gives access to the bearer (holder) of the token. Prefixed in HTTP request header as `Authorization: Bearer <token>`. |
| **Basic Authentication** | An HTTP protocol authentication scheme sending a Base64-encoded username and password in the header: `Authorization: Basic <base64(username:password)>`. |
| **AuthenticationManager** | The main entry point strategy API in Spring Security for performing authentication. It delegates validation to configured `AuthenticationProvider`s. |
| **SecurityContextHolder** | The central helper storing details of the current security context, containing the authenticated principal's authentication object. |
| **UserDetails** | Core Spring Security interface providing necessary user information (username, password, roles/authorities) to configure authentication. |
| **PasswordEncoder** | Service interface used to encode and verify passwords. **BCryptPasswordEncoder** hashes passwords securely using a random salt. |
| **Filter Chain** | A series of filters that intercept incoming requests to process security rules (checking credentials, validation, session policy, etc.) before reaching the API controllers. |
| **Stateless Session** | Configured via `SessionCreationPolicy.STATELESS`. Spring Security will not create or store any `HttpSession` details. Every request must authenticate itself (e.g., using a JWT). |

---

## ⚠️ Common Errors & Troubleshooting

1. **401 Unauthorized**:
   - *Cause*: Invalid username or password, missing Authorization header, or invalid signature.
   - *Fix*: Check credentials, check spelling of "Basic " or "Bearer " prefixes.
2. **403 Forbidden**:
   - *Cause*: The JWT validation failed, or the user does not have the required role (e.g., `ROLE_USER`) to access the endpoint.
3. **Expired JWT Exception**:
   - *Cause*: The token expiration timestamp has passed.
   - *Fix*: Generate a new token by calling `/authenticate` again.
4. **Circular Dependency Error**:
   - *Cause*: Injecting `UserDetailsService` into `SecurityConfig` while it is injected back elsewhere.
   - *Fix*: Decouple configurations. Define security beans like `PasswordEncoder` in a configuration class.
5. **Port Already in Use (8090)**:
   - *Cause*: Another application is already running on port 8090.
   - *Fix*: Kill the process running on 8090, or change the port in `application.properties` using `server.port=XXXX`.

---

## 🔒 Best Practices implemented

- **BCrypt Password Encoding**: Passwords are saved hashed in H2, never in plain text.
- **Stateless Configuration**: Reduces memory overhead on servers and improves horizontal scalability.
- **Robust JWT Secret Size**: Configured secret key is 256 bits minimum (32 bytes) to satisfy HS256 algorithm constraints.
- **Centralized Exception Handling**: Ensures failures return unified JSON formats rather than raw stack traces.

---

## 🎓 Viva & Interview Questions

1. **Why is JWT preferred over session-based authentication in microservices?**
   - *Answer*: Sessions require server-side state storage, limiting horizontal scalability across multiple microservice nodes. JWT is stateless, self-contained, and carries all user details in its payload, removing the need for session sharing or sticky sessions.
2. **What happens if someone steals your JWT?**
   - *Answer*: Since JWT is a Bearer token, anyone who has it gets access. To mitigate this: use HTTPS (encryption in transit), set short token expiration times, and implement refresh tokens to rotate credentials.
3. **What is the purpose of the `SecurityContextHolder`?**
   - *Answer*: It is a thread-local container storing details of the currently authenticated principal. Once a request passes `JwtRequestFilter` successfully, the authentication is stored here so subsequent filters and controllers know the user is logged in.
4. **Why do we need a PasswordEncoder like BCrypt?**
   - *Answer*: In case of a database breach, plain text passwords would be exposed. BCrypt uses a one-way cryptographic hashing algorithm with an automatically generated salt, making it computationally expensive for attackers to brute-force.
5. **What is the role of `OncePerRequestFilter`?**
   - *Answer*: It is a base filter class guaranteeing a single execution per request dispatch, preventing redundant authentication checks within the same request lifecycle (e.g., when forwarding between views).
