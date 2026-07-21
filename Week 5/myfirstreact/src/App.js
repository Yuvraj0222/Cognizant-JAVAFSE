/**
 * ============================================================================
 * Academic Lab Assignment: myfirstreact
 * File: src/App.js
 * Objective: Create a functional React component rendering the required heading
 *            "Welcome to the first session of React" with JSX and proper export.
 * ============================================================================
 */

// Step 1: Import React library (required for JSX parsing and component definition)
import React from 'react';

// Step 2: Import CSS stylesheet for styling the application UI
import './App.css';

/**
 * Functional Component: App
 * 
 * In React, a Functional Component is a JavaScript function that returns JSX 
 * (JavaScript XML) describing what the UI should look like on the screen.
 * 
 * @returns {JSX.Element} The rendered React component tree.
 */
function App() {
  return (
    // Outer division container for layout and glassmorphism styling
    <div className="App">
      <main className="app-container">
        
        {/* Animated React Logo SVG Badge */}
        <div className="logo-badge" title="React Engine Active">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="#06b6d4" />
          </svg>
        </div>

        {/* Primary Required Heading */}
        <h1 className="main-heading">
          Welcome to the first session of React
        </h1>

        {/* Descriptive Subtitle explaining the session context */}
        <p className="subtitle">
          Congratulations on launching your initial Single Page Application (SPA). 
          This project demonstrates component architecture, JSX syntax, and modern front-end workflow.
        </p>

        {/* Feature Badges demonstrating React characteristics */}
        <div className="badge-container">
          <span className="badge">⚡ Functional Component</span>
          <span className="badge">⚛️ React 18 Concurrent DOM</span>
          <span className="badge">🎨 Modern Glassmorphism</span>
          <span className="badge">📦 Create React App</span>
        </div>

        {/* Footer info displaying project metadata */}
        <footer className="footer-text">
          Academic Lab Session 1 | Project: <strong>myfirstreact</strong> | Port: <code>3000</code>
        </footer>

      </main>
    </div>
  );
}

// Step 3: Export the App component as the default export of this module
// This allows index.js to import and render App into the DOM root element.
export default App;
