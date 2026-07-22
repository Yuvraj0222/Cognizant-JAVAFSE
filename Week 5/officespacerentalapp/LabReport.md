# Academic Lab Report

**Subject:** Front-End Web Development Lab  
**Lab Assignment:** React JSX, Elements, React DOM Rendering, and Inline CSS  
**Project Name:** officespacerentalapp  

---

## 1. Aim
To design and implement a React application (`officespacerentalapp`) utilizing JSX syntax, custom elements, React DOM rendering, JavaScript expressions, and inline conditional CSS styling.

---

## 2. Objectives
By completing this laboratory assignment, the following conceptual areas and objectives were fulfilled:
1. Understand the core principles of JSX and its compilation to `React.createElement()` calls.
2. Demonstrate how ECMAScript 2015 (ES6) features integrate into React components.
3. Master the process of rendering JSX nodes to the browser DOM using the React 18 `createRoot` API.
4. Implement JavaScript Expressions inside JSX using curly braces `{}` to render object attributes.
5. Apply Inline CSS in JSX using camelCased property style objects.
6. Design conditional inline styles to dynamically change the color of the rent amount based on value thresholds.
7. Iterate and render lists of objects dynamically using the `map()` function.
8. Analyze the benefits of JSX over traditional HTML template systems.

---

## 3. Prerequisites
* **Node.js** (v14.0.0 or higher)
* **NPM** (Node Package Manager)
* **Visual Studio Code** (Integrated Development Environment)
* Modern web browser (Chrome, Firefox, Edge, etc.)

---

## 4. Procedure
1. **Initialize Project:** Created a React project workspace named `officespacerentalapp` using standard packages (`react`, `react-dom`, `react-scripts`).
2. **Setup Image Asset:** Downloaded and copied a professional office space workspace image to `src/assets/office.png`.
3. **Declare Data Structures:** Configured `App.js` containing:
   * A single `office` object representing featured workspaces.
   * An `officeSpaces` array containing multiple office listings (Name, Rent, Address, Image).
4. **Build JSX Templates:** Implemented a page header displaying "Office Space , at Affordable Range".
5. **Render Single Object:** Rendered the attributes of the featured `office` object.
6. **Implement List Rendering:** Used `map()` to iterate through the `officeSpaces` array and output cards with individual details.
7. **Apply Conditional Inline Styling:** Configured the `Rent` text element with a style object containing conditional inline color assignment (Red if Rent < 60,000, Green if Rent >= 60,000).
8. **Mount Application:** Hooked `App.js` to render within the HTML root node inside `index.js`.
9. **Install & Run:** Installed dependencies via `npm install` and launched the development server on `http://localhost:3000`.

---

## 5. Source Code

### A. App.js
```javascript
import React from 'react';
import './App.css';
import officeImage from './assets/office.png';

const office = {
  Name: "DBS",
  Rent: 50000,
  Address: "Chennai"
};

const officeSpaces = [
  {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai",
    Image: officeImage
  },
  {
    Name: "WeWork",
    Rent: 75000,
    Address: "Bangalore",
    Image: officeImage
  },
  {
    Name: "Regus",
    Rent: 65000,
    Address: "Hyderabad",
    Image: officeImage
  },
  {
    Name: "SmartWorks",
    Rent: 45000,
    Address: "Pune",
    Image: officeImage
  }
];

function App() {
  return (
    <div className="container">
      <h1 className="page-title">Office Space , at Affordable Range</h1>

      <div className="hero-section">
        <img
          src={officeImage}
          alt="Office Space"
          className="hero-image"
        />
      </div>

      <div className="single-office card">
        <h2 className="card-heading">Featured Office</h2>
        <p className="detail-line"><strong>Name:</strong> {office.Name}</p>
        <p className="detail-line"><strong>Rent:</strong> Rs. {office.Rent}</p>
        <p className="detail-line"><strong>Address:</strong> {office.Address}</p>
      </div>

      <h2 className="section-heading">Available Office Spaces</h2>
      <div className="office-grid">
        {officeSpaces.map((officeItem, index) => (
          <div className="card office-card" key={index}>
            <img
              src={officeItem.Image}
              alt={officeItem.Name}
              className="office-image"
            />
            <div className="card-content">
              <h3 className="office-name">{officeItem.Name}</h3>
              <h3
                style={{
                  color:
                    officeItem.Rent < 60000
                      ? "red"
                      : "green"
                }}
              >
                Rent: Rs. {officeItem.Rent}
              </h3>
              <p className="office-address">Address: {officeItem.Address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
```

### B. App.css
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #0c1222 0%, #162040 100%);
  min-height: 100vh;
  color: #e2e8f0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(to right, #f59e0b, #ef4444, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
}

.hero-section {
  width: 100%;
  margin-bottom: 2.5rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
}

.hero-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}

.card {
  background: rgba(17, 24, 39, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

.single-office {
  margin-bottom: 2.5rem;
}

.card-heading {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fbbf24;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(251, 191, 36, 0.15);
}

.detail-line {
  font-size: 1.05rem;
  color: #cbd5e1;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.detail-line:last-child {
  border-bottom: none;
}

.detail-line strong {
  color: #94a3b8;
  font-weight: 500;
  margin-right: 0.5rem;
}

.section-heading {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #f8fafc;
}

.office-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.office-card {
  padding: 0;
  overflow: hidden;
}

.office-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 1.5rem;
}

.office-name {
  font-size: 1.35rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 0.5rem;
}

.office-address {
  font-size: 0.95rem;
  color: #94a3b8;
  margin-top: 0.5rem;
}
```

---

## 6. Output Verification

### Expected Styling Results
* **DBS**: Rent displayed in **Red** (Rent is 50,000 < 60,000).
* **WeWork**: Rent displayed in **Green** (Rent is 75,000 >= 60,000).
* **Regus**: Rent displayed in **Green** (Rent is 65,000 >= 60,000).
* **SmartWorks**: Rent displayed in **Red** (Rent is 45,000 < 60,000).

---

## 7. Result
The Office Space Rental Application was successfully built using React JSX and Inline CSS. The application properly displays dynamic attributes, map iterations, and conditional inline styling rules for rental valuations.
