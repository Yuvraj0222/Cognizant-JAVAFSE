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

