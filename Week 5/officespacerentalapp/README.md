# Office Space Rental Application

## Introduction
An Office Space Rental dashboard built using **React JSX** that demonstrates JSX elements, attributes, expressions, list rendering, inline CSS, and conditional styling.

## Concepts Demonstrated
* **JSX** — HTML-like syntax compiled to `React.createElement()` calls.
* **React Elements** — Lightweight descriptions of DOM nodes created via JSX.
* **React DOM Rendering** — Mounting the component tree using `ReactDOM.createRoot().render()`.
* **JavaScript Expressions** — Embedding object properties and computations inside `{}` braces.
* **Inline CSS** — Applying styles via the `style` prop using JavaScript objects.
* **Conditional Styling** — Ternary operators inside `style` to dynamically set colors based on rent values.

## Installation
```bash
npm install
npm start
```
The application will open at `http://localhost:3000` (or the next available port).

## Expected Output
* A page heading: "Office Space , at Affordable Range"
* A hero office space image
* A featured office card displaying DBS details
* A grid of 4 office cards (DBS, WeWork, Regus, SmartWorks)
* Rent displayed in **red** for offices < ₹60,000 and **green** for offices ≥ ₹60,000

## Project Structure
```text
officespacerentalapp
├── public/index.html
├── src
│   ├── assets/office.png
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```
