# Academic Lab Report

**Subject:** Front-End Web Development Lab  
**Lab Assignment:** React Functional Components and Styling  
**Project Name:** scorecalculatorapp  

---

## 1. Aim
To design, implement, and style a React Functional Component (`CalculateScore`) that accepts student details and performance marks as props, automatically calculates the percentage score, and presents the output in a responsive card interface.

---

## 2. Objectives
By completing this laboratory assignment, the following conceptual areas and objectives were fulfilled:
1. Explain the theory of React Components and their role in virtual DOM reconciliation.
2. Outline the critical differences between React Components and standard JavaScript Functions.
3. Understand the two types of components (Class vs Functional) and their respective features.
4. Deep-dive into Class Component architecture, focusing on the component constructor and the lifecycle of state initialization.
5. Understand the `render()` method, its purity requirement, and its execution trigger.
6. Design, implement, and style functional components using props.
7. Integrate external CSS stylesheets containing specific classes (`.container`, `.name`, `.school`, `.total`, `.score`, `.heading`) for premium user interface presentation.

---

## 3. Prerequisites
* **Node.js** (v14.0.0 or higher)
* **NPM** (Node Package Manager)
* **Visual Studio Code** (Integrated Development Environment)
* Modern web browser (Chrome, Firefox, Edge, etc.)

---

## 4. Procedure
1. **Bootstrap the Project:** Created a React application workspace named `scorecalculatorapp` with a custom `package.json` specifying React 18, React DOM, and React-Scripts.
2. **Create Folders:** Structured the workspace directories:
   * Created `src/Components/` to house React components.
   * Created `src/Stylesheets/` to organize custom CSS styles.
3. **Create Component:** Implemented `CalculateScore.js` inside `src/Components/` as a stateless functional component utilizing object destructuring for props (`Name`, `School`, `Total`, `Goal`).
4. **Define Calculation Logic:** Integrated the helper functions `percentToDecimal` and `calcScore` to automatically evaluate student marks and format them to two decimal places.
5. **Create Styling:** Developed `mystyle.css` inside `src/Stylesheets/` using CSS variables, hover micro-animations, custom flexboxes, rounded corners, and shadow effects.
6. **Set up Application Shell:** Configured `App.js` to import and render `<CalculateScore />` with the required parameters: `Name="John"`, `School="DNV Public School"`, `Total={284}`, and `Goal={300}`.
7. **Configure Entry Point:** Set up `index.js` to render the `App` component onto the HTML root div utilizing the React 18 `createRoot` API.
8. **Install Packages:** Run the terminal command `npm install` inside the project root directory.
9. **Launch Application:** Executed `npm start` to spawn the local development server and preview the layout on `http://localhost:3000`.

---

## 5. Source Code

### A. App.js
```javascript
import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="John"
        School="DNV Public School"
        Total={284}
        Goal={300}
      />
    </div>
  );
}

export default App;
```

### B. CalculateScore.js
```javascript
import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
  return (decimal * 100).toFixed(2) + "%";
};

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

const CalculateScore = ({ Name, School, Total, Goal }) => {
  const calculatedScore = calcScore(Total, Goal);

  return (
    <div className="container">
      <h2 className="heading">Student Details</h2>
      <div className="detail-card">
        <p className="detail-row">
          <span className="label">Name:</span> 
          <span className="name">{Name}</span>
        </p>
        <p className="detail-row">
          <span className="label">School:</span> 
          <span className="school">{School}</span>
        </p>
        <p className="detail-row">
          <span className="label">Total:</span> 
          <span className="total">{Total} Marks</span>
        </p>
        <p className="detail-row">
          <span className="label">Goal:</span> 
          <span className="goal">{Goal} Marks</span>
        </p>
        <p className="detail-row highlight">
          <span className="label">Score:</span> 
          <span className="score">{calculatedScore}</span>
        </p>
      </div>
    </div>
  );
};

export default CalculateScore;
```

### C. mystyle.css
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Outfit', sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8fafc;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 480px;
  padding: 2rem;
  margin: auto;
}

.heading {
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(to right, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  font-size: 1.8rem;
}

.detail-card {
  width: 100%;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 
              0 10px 10px -5px rgba(0, 0, 0, 0.2),
              0 0 40px rgba(99, 102, 241, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.4), 
              0 15px 15px -5px rgba(0, 0, 0, 0.3),
              0 0 50px rgba(99, 102, 241, 0.2);
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 1.1rem;
}

.detail-row:last-child {
  border-bottom: none;
}

.label {
  font-weight: 500;
  color: #94a3b8;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

.name {
  font-weight: 600;
  color: #2dd4bf;
  text-shadow: 0 0 10px rgba(45, 212, 191, 0.2);
}

.school {
  font-weight: 500;
  color: #fbbf24;
  text-shadow: 0 0 10px rgba(251, 191, 36, 0.2);
  text-align: right;
  max-width: 65%;
}

.total {
  font-weight: 600;
  color: #818cf8;
  text-shadow: 0 0 10px rgba(129, 140, 248, 0.2);
}

.goal {
  font-weight: 600;
  color: #cbd5e1;
}

.detail-row.highlight {
  margin-top: 1.25rem;
  padding: 1.25rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
}

.score {
  font-size: 1.8rem;
  font-weight: 700;
  color: #34d399;
  text-shadow: 0 0 15px rgba(52, 211, 153, 0.4);
}
```

---

## 6. Output Verification

The score percentage calculation performs:
$$\text{Score} = \text{percentToDecimal}\left(\frac{284}{300}\right) = 94.67\%$$

### Textual Render representation:
```text
Student Details
----------------------------
Name:   John
School: DNV Public School
Total:  284 Marks
Goal:   300 Marks
----------------------------
Score:  94.67%
```

---

## 7. Result
The Student Score Calculator was successfully implemented using React Functional Components, properly configured properties (props), mathematical helper functions, and custom CSS styling elements. The layout dynamically calculates scores, handles browser responsiveness, and matches standard academic report guidelines.
