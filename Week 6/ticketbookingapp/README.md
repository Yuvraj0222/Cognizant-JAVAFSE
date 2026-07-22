# Flight Ticket Booking System - Conditional Rendering

## Introduction
A React application demonstrating **Conditional Rendering** in React using functional components and the `useState` hook. The application allows users to view available flight tickets as a Guest, login to toggle to the User view, and book tickets or logout.

---

## Concepts Demonstrated
* **Conditional Rendering:** Toggling between `<GuestPage />` and `<UserPage />` based on `isLoggedIn` state.
* **State Management (`useState`):** Utilizing local state to track user login status.
* **Component Architecture:** Small, focused, reusable components.
* **Props passing:** Passing data and action callbacks (`onClick`, `onLogin`, `onLogout`) from parents to child components.

---

## Installation
```bash
npx create-react-app ticketbookingapp
cd ticketbookingapp
npm install
npm start
```
The application will boot on `http://localhost:3000` (or `http://localhost:3006` in case of conflicts).

---

## Expected Flow
1. **Initial Mount:** Displays the Guest View containing "Welcome Guest", a flight details table, a "Please Login to Book Tickets" instruction, and a **Blue Login button**.
2. **Login Click:** User logs in, updating state. Toggles to User View displaying "Welcome Back", a **Red Logout button** at the top right, the same flight table, and a **Green Book Ticket button**.
3. **Book Ticket Click:** Alerts "Ticket Booked Successfully!".
4. **Logout Click:** Updates state to false, returning back to the Guest View.

---

## Folder Structure
```text
ticketbookingapp
│
├── public
│   └── index.html
│
├── src
│   ├── components
│   │   ├── FlightDetails.js
│   │   ├── Footer.js
│   │   ├── GuestPage.js
│   │   ├── Header.js
│   │   ├── LoginButton.js
│   │   ├── LogoutButton.js
│   │   └── UserPage.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```
*(Note: To match standard folder structures, all component files are generated under the root `src/` directory as specified in the lab prompt folder structure, with helper components imported accordingly)*
