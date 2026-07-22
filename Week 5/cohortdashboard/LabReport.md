# Academic Lab Report

**Subject:** Front-End Web Development Lab  
**Lab Assignment:** React Styling — CSS Modules & Inline Styles  
**Project Name:** cohortdashboard (Cognizant Academy Cohort Dashboard)  

---

## 1. Aim
To style React Components using CSS Modules for locally-scoped class-based styling and Inline Styles for conditional, data-driven visual presentation.

---

## 2. Objectives
By completing this laboratory assignment, the following conceptual areas and objectives were fulfilled:
1. Understand the need for styling React components and the available styling mechanisms.
2. Implement CSS Modules by creating a `.module.css` file and importing it as a JavaScript object.
3. Apply CSS Module classes using the `className` property in JSX.
4. Implement Inline Styling using the `style` property with JavaScript objects containing camelCased CSS properties.
5. Demonstrate Conditional Styling by using ternary operators to dynamically set colors based on cohort status data.
6. Style HTML `<dt>` elements using tag selectors within the CSS Module.
7. Analyze the differences, advantages, and limitations of CSS Modules versus Inline Styles.

---

## 3. Prerequisites
* **Node.js** (v14.0.0 or higher)
* **NPM** (Node Package Manager)
* **Visual Studio Code** (Integrated Development Environment)
* Modern web browser (Chrome, Firefox, Edge)

---

## 4. Procedure
1. **Create CSS Module:** Created `src/CohortDetails.module.css` containing the `.box` class with `width: 300px`, `display: inline-block`, `margin: 10px`, `padding: 10px 20px`, `border: 1px solid black`, `border-radius: 10px`, and `vertical-align: top`.
2. **Define box class:** Applied all required box properties for card-style display with rounded corners.
3. **Style dt element:** Added a tag selector `dt { font-weight: 500; }` inside the CSS Module to bold definition terms.
4. **Import CSS Module:** Imported the module in `CohortDetails.js` using `import styles from "../CohortDetails.module.css";` to obtain the locally-scoped class names object.
5. **Apply className:** Used `className={styles.box}` on each cohort card `<div>` to apply the CSS Module class.
6. **Apply inline styling:** Used the React `style` property on the `<h3>` heading with a ternary operator: green for "Ongoing" status, blue otherwise.
7. **Render cohort details:** Mapped over the sample cohort data array to render individual cards with Cohort Code, Start Date, Status, Coach, and Trainer using `<dl>`, `<dt>`, and `<dd>` elements.
8. **Run npm start:** Installed dependencies with `npm install` and launched the development server with `npm start`.

---

## 5. Source Code

### A. CohortDetails.module.css
```css
.box {
  width: 300px;
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
  vertical-align: top;
}

dt {
  font-weight: 500;
}
```

### B. CohortDetails.js
```javascript
import React from 'react';
import styles from "../CohortDetails.module.css";

const cohortData = [
  {
    cohortCode: "INTADMDF10 - .NET FSD",
    startDate: "22-Feb-2022",
    status: "Scheduled",
    coach: "Aathma",
    trainer: "Jojo Jose"
  },
  {
    cohortCode: "ADM21JF014 - Java FSD",
    startDate: "10-Sep-2021",
    status: "Ongoing",
    coach: "Apoorv",
    trainer: "Elisa Smith"
  },
  {
    cohortCode: "CDBJF21025 - Java FSD",
    startDate: "24-Dec-2021",
    status: "Ongoing",
    coach: "Aathma",
    trainer: "John Doe"
  }
];

const CohortDetails = () => {
  return (
    <div>
      <h2>Cohorts Details</h2>
      {cohortData.map((cohort, index) => (
        <div className={styles.box} key={index}>
          <h3
            style={{
              color:
                cohort.status.toLowerCase() === "ongoing"
                  ? "green"
                  : "blue"
            }}
          >
            {cohort.cohortCode}
          </h3>
          <dl>
            <dt>Started On</dt>
            <dd>{cohort.startDate}</dd>
            <dt>Current Status</dt>
            <dd>{cohort.status}</dd>
            <dt>Coach</dt>
            <dd>{cohort.coach}</dd>
            <dt>Trainer</dt>
            <dd>{cohort.trainer}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
};

export default CohortDetails;
```

### C. App.js
```javascript
import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails />
    </div>
  );
}

export default App;
```

---

## 6. Output Verification

### Expected Rendering
The application renders a heading "Cohorts Details" followed by three inline-block cards:

| Card | Cohort Code | Heading Color | Status |
| :--- | :--- | :--- | :--- |
| 1 | INTADMDF10 - .NET FSD | **Blue** | Scheduled |
| 2 | ADM21JF014 - Java FSD | **Green** | Ongoing |
| 3 | CDBJF21025 - Java FSD | **Green** | Ongoing |

Each card displays: Start Date, Current Status, Coach, and Trainer inside a bordered, rounded container with 300px width.

---

## 7. Result
The Cognizant Academy Cohort Dashboard was successfully implemented using CSS Modules for card layout styling (`.box` class with `className` property) and Inline Styles for conditional heading color logic (`style` property with ternary operator). The application demonstrates that CSS Modules provide safe, locally-scoped class names while inline styles enable dynamic, data-driven visual presentation.
