# Academic Lab Report

**Subject:** Front-End Web Development Lab  
**Lab Assignment:** React Conditional Rendering, Functional Components, and Hooks  
**Project Name:** ticketbookingapp  

---

## 1. Aim
To design and implement a Flight Ticket Booking system using React Functional Components and the `useState` hook to demonstrate conditional rendering between Guest and User views.

---

## 2. Objectives
By completing this laboratory assignment, the following conceptual areas and objectives were fulfilled:
1. Demonstrate React Conditional Rendering inside functional components.
2. Manage local state using the `useState` hook.
3. Apply parent-to-child communication using read-only property bindings (`props`).
4. Design small, modular, reusable components with single responsibilities (`Header`, `Footer`, `FlightDetails`, `LoginButton`, `LogoutButton`).
5. Develop a styled data presentation table featuring flight listings.
6. Configure professional layouts in `App.css` featuring white card structures, row-hover transitions, and customized button styles.

---

## 3. Prerequisites
* **Node.js** (v14.0.0 or higher)
* **NPM** (Node Package Manager)
* **Visual Studio Code** (Integrated Development Environment)
* Modern web browser.

---

## 4. Procedure
1. **Bootstrap Project:** Set up the `ticketbookingapp` React workspace structure.
2. **Create Reusable Sub-components:** Developed:
   * `Header.js` rendering title banners.
   * `Footer.js` rendering copyright strings.
   * `LoginButton.js` and `LogoutButton.js` as parameterized action components.
3. **Build Table Component:** Created `FlightDetails.js` wrapping sample flight structures.
4. **Build Guest View:** Designed `GuestPage.js` outputting welcome guidelines and a LoginButton.
5. **Build User View:** Designed `UserPage.js` outputting welcome alerts, a Book Ticket action button, and a LogoutButton positioned at the top right.
6. **Implement Conditional Logic:** Configured `App.js` with `useState` to toggle renders between GuestPage and UserPage based on the `isLoggedIn` boolean.
7. **Complete Styling sheet:** Wrote class definitions inside `App.css` ensuring responsive grids, row hover animations, and colored button styles.
8. **Mount Application:** Hooked root rendering functions in `index.js`.
9. **Build & Run:** Installed packages and initiated the dev server.

---

## 5. Source Code

### A. App.js
```javascript
import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <UserPage onLogout={handleLogout} />;
  } else {
    return <GuestPage onLogin={handleLogin} />;
  }
}

export default App;
```

### B. GuestPage.js
```javascript
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FlightDetails from './FlightDetails';
import LoginButton from './LoginButton';
import './App.css';

const GuestPage = (props) => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <h2 className="welcome-heading">Welcome Guest</h2>
        <p className="welcome-message">You can browse available flights.</p>
        <FlightDetails />
        <div className="action-section">
          <p className="instruction-text">Please Login to Book Tickets.</p>
          <LoginButton onClick={props.onLogin} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuestPage;
```

### C. UserPage.js
```javascript
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FlightDetails from './FlightDetails';
import LogoutButton from './LogoutButton';
import './App.css';

const UserPage = (props) => {
  const handleBookTicket = () => {
    alert("Ticket Booked Successfully!");
  };

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <div className="top-nav">
          <LogoutButton onClick={props.onLogout} />
        </div>
        <h2 className="welcome-heading">Welcome Back</h2>
        <p className="welcome-message success-message">You are successfully logged in.</p>
        <FlightDetails />
        <div className="action-section">
          <button onClick={handleBookTicket} className="btn book-btn">
            Book Ticket
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserPage;
```

### D. FlightDetails.js
```javascript
import React from 'react';
import './App.css';

const FlightDetails = () => {
  const flights = [
    { number: "AI101", airline: "Air India", source: "Delhi", destination: "Mumbai", time: "10:30 AM", price: "₹4500" },
    { number: "6E202", airline: "IndiGo", source: "Chennai", destination: "Bangalore", time: "01:15 PM", price: "₹3200" },
    { number: "UK303", airline: "Vistara", source: "Hyderabad", destination: "Kolkata", time: "06:45 PM", price: "₹5100" }
  ];

  return (
    <div className="flight-table-container">
      <table className="flight-table">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, idx) => (
            <tr key={idx}>
              <td>{flight.number}</td>
              <td className="airline-name">{flight.airline}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>{flight.time}</td>
              <td className="flight-price">{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightDetails;
```

---

## 6. Output Verification

### Flow Validated
1. **Initial View**: Opens Guest View. Displays Welcome message and flight details. Only Login button visible.
2. **Action Click**: Clicking Login switches to User Page showing "Welcome Back" with Book Ticket button at bottom and Logout button at top right.
3. **Trigger Booking**: Clicking Book Ticket triggers alert.
4. **Trigger Logout**: Clicking Logout toggles page back to Guest page.

---

## 7. Result
The Flight Ticket Booking application was successfully implemented using React Functional Components, demonstrating standard conditional rendering structures and Hook state managements.
