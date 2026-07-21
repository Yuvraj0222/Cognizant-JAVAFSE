/**
 * ============================================================================
 * Project: myfirstreact
 * File: src/index.js
 * Description: Entry point of the React application. Responsible for importing
 *              React dependencies, loading CSS styles, and mounting the root App
 *              component onto the DOM root element.
 * ============================================================================
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// Step 1: Access the HTML element with id 'root' defined in public/index.html
const container = document.getElementById('root');

// Step 2: Create a React 18 Concurrent Root container attached to the DOM element
const root = ReactDOM.createRoot(container);

// Step 3: Render the App component wrapped inside React.StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
