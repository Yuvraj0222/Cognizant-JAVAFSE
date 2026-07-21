# Student Management Portal - Score Calculator

## Introduction

A modern and responsive **Student Score Calculator** built using React Functional Components and styled with clean, high-performance CSS. This application demonstrates the usage of functional components, state-less props communication, and pure mathematical rendering in React.

---

## Software Requirements

Before setting up the project, ensure you have the following installed on your system:
* **Node.js** (v14.0.0 or higher recommended)
* **NPM** (Node Package Manager, bundled with Node.js)
* **Visual Studio Code** (or any preferred code editor)

---

## Installation

To set up and run the application locally, follow these steps:

1. **Bootstrap the React Project:**
   ```bash
   npx create-react-app scorecalculatorapp
   ```

2. **Navigate into the Project Directory:**
   ```bash
   cd scorecalculatorapp
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```
   *This command will run the app in development mode and open it in your browser at `http://localhost:3000`.*

---

## Project Structure

The project has the following directory structure:

```text
scorecalculatorapp
│
├── public
│   └── index.html
│
├── src
│   ├── Components
│   │   └── CalculateScore.js
│   │
│   ├── Stylesheets
│   │   └── mystyle.css
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

---

## How the Calculation Works

The score percentage is computed using pure JavaScript helper functions inside the `CalculateScore` component. Here is the operational logic:

1. **Calculate Fraction:**
   We compute the raw ratio of marks scored over the goal marks:
   $$\text{Ratio} = \frac{\text{Total Marks}}{\text{Goal Marks}}$$
   *Example: $\frac{284}{300} \approx 0.946667$*

2. **Convert to Percentage:**
   Multiply the ratio by 100, round the resulting number to 2 decimal places using `toFixed(2)`, and append the percentage `%` symbol.
   ```javascript
   const percentToDecimal = (decimal) => {
     return (decimal * 100).toFixed(2) + "%";
   };

   const calcScore = (total, goal) => {
     return percentToDecimal(total / goal);
   };
   ```
   *Example: $0.946667 \times 100 = 94.6667 \rightarrow \text{94.67}\%$*

---

## Expected Output

Below is a visualization of the expected user interface:

```text
+------------------------------------------+
|          STUDENT DETAILS                 |
+------------------------------------------+
|  Name:   John                            |
|  School: DNV Public School               |
|  Total:  284 Marks                       |
|  Goal:   300 Marks                       |
|  +------------------------------------+  |
|  | Score:                      94.67% |  |
|  +------------------------------------+  |
+------------------------------------------+
```

*(Place actual screenshot image here: `src/assets/screenshot.png` once generated)*
