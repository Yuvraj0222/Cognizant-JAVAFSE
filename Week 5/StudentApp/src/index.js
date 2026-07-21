/**
 * ============================================================================
 * Project: StudentApp - Student Management Portal
 * File: src/index.js
 * Description: Main entry point for the React application. Renders the top-level
 *              App component into the browser's DOM root.
 * ============================================================================
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// Step 1: Select the root DOM node defined in public/index.html
const rootElement = document.getElementById('root');

// Step 2: Create React 18 Concurrent Root container
const root = ReactDOM.createRoot(rootElement);

// Step 3: Render App component enclosed in StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
