# Academic Lab Report: Session 1 - React Application

**Course Title**: Web Application Development / Front-End Engineering Lab  
**Lab Assignment No**: 01  
**Project Name**: `myfirstreact`  
**Date**: July 22, 2026  

---

## 1. Aim

To design, develop, and execute a Single Page Application (SPA) using React that renders the heading:

> **"Welcome to the first session of React"**

and demonstrates fundamental React concepts including functional components, JSX syntax, component styling, and default exports.

---

## 2. Objectives

1. Set up a React application environment using Create React App configuration.
2. Construct a functional React component named `App`.
3. Implement proper JSX (JavaScript XML) markup to render the required heading.
4. Export and render the `App` component into the DOM root element (`index.js`).
5. Execute the local development server using `npm start` and verify execution at `http://localhost:3000`.

---

## 3. Software Requirements

- **Node.js**: Runtime environment (v14.0.0 or higher)
- **NPM**: Node Package Manager (v6.0.0 or higher)
- **Visual Studio Code**: Integrated Development Environment (IDE)
- **Web Browser**: Google Chrome, Mozilla Firefox, or Microsoft Edge

---

## 4. Procedure

### Step 1: Install Node.js & NPM
Download and install the LTS version of Node.js from the official website (`https://nodejs.org/`). Node Package Manager (NPM) is automatically installed alongside Node.js.

### Step 2: Verify Installation & Versions
Open Command Prompt / Terminal and run the following commands to check installed versions:
```bash
node -v
npm -v
```

### Step 3: Create React App
Initialize the React application named `myfirstreact`:
```bash
npx create-react-app myfirstreact
```

### Step 4: Navigate to Project Folder
Change working directory to the newly created project folder:
```bash
cd myfirstreact
```

### Step 5: Open Project in Visual Studio Code
Launch VS Code inside the project directory:
```bash
code .
```

### Step 6: Edit `src/App.js`
Open `src/App.js` and modify the content to create a functional component rendering the required heading:
```jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="app-container">
        <h1 className="main-heading">
          Welcome to the first session of React
        </h1>
      </main>
    </div>
  );
}

export default App;
```

### Step 7: Run Application Server
Start the development server using npm:
```bash
npm start
```

### Step 8: View Application Output
Open browser and navigate to:
```
http://localhost:3000
```

---

## 5. Source Code

### A. `src/App.js`
```jsx
/**
 * Project: myfirstreact
 * File: src/App.js
 */
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="app-container">
        <div className="logo-badge">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="#06b6d4" />
          </svg>
        </div>

        <h1 className="main-heading">
          Welcome to the first session of React
        </h1>

        <p className="subtitle">
          Congratulations on launching your initial Single Page Application (SPA).
        </p>

        <div className="badge-container">
          <span className="badge">⚡ Functional Component</span>
          <span className="badge">⚛️ React 18 Concurrent DOM</span>
          <span className="badge">🎨 Modern Glassmorphism</span>
        </div>

        <footer className="footer-text">
          Academic Lab Session 1 | Project: myfirstreact | Port: 3000
        </footer>
      </main>
    </div>
  );
}

export default App;
```

### B. `src/index.js`
```jsx
/**
 * Project: myfirstreact
 * File: src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### C. `public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>myfirstreact - React Session 1</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

---

## 6. Output

### Visual Rendering Summary
When `npm start` is executed, the compilation succeeds without warnings or errors. The browser renders a web page at `http://localhost:3000` with the following elements:

1. **Title Bar**: Displays `myfirstreact - React Session 1`.
2. **Main Heading**: Displayed prominently in bold typography:
   **"Welcome to the first session of React"**
3. **Interactive Features**: Animated spinning React logo SVG, informative subtitle text, feature badges, and glassmorphism container styling.

### Terminal Output Verification
```bash
Compiled successfully!

You can now view myfirstreact in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.5:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

---

## 7. Result

The React project **myfirstreact** was successfully created, configured, and executed. The application rendered the required heading **"Welcome to the first session of React"** on `http://localhost:3000` using standard JSX syntax and a functional component architecture. All academic lab requirements have been met.
