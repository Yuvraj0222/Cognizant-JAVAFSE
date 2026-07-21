/**
 * ============================================================================
 * Project: StudentApp - Student Management Portal
 * File: src/App.js
 * Description: Root container component that imports and renders Home, About,
 *              and Contact class components sequentially within a structured,
 *              responsive academic UI layout.
 * ============================================================================
 */

import React, { Component } from 'react';

// Step 1: Import custom Class Components from the Components directory
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

// Import CSS styles for academic portal layout
import './App.css';

/**
 * Root App Class Component
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portalName: "Student Management Portal",
      academicYear: "2025 - 2026"
    };
  }

  render() {
    return (
      <div className="App">
        {/* Main Portal Navigation Header */}
        <header className="portal-header">
          <div className="header-content">
            <div className="portal-logo">
              <span className="logo-icon">🎓</span>
              <div>
                <h1 className="main-title">{this.state.portalName}</h1>
                <p className="sub-title">React Component Architecture Demo | Session 2</p>
              </div>
            </div>
            <div className="header-meta">
              <span className="meta-badge">{this.state.academicYear}</span>
            </div>
          </div>
        </header>

        {/* Sequential Component Rendering Section */}
        <main className="portal-body">
          <div className="intro-banner">
            <h2>React Component Hierarchy</h2>
            <p>Rendering three distinct Class Components (`Home`, `About`, `Contact`) sequentially inside the root `App` component.</p>
          </div>

          {/* 1. Home Component */}
          <section className="component-wrapper">
            <Home />
          </section>

          {/* 2. About Component */}
          <section className="component-wrapper">
            <About />
          </section>

          {/* 3. Contact Component */}
          <section className="component-wrapper">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer className="portal-footer">
          <p>Student Management Portal &copy; 2026 | Built with React Class Components & Extended Component Architecture</p>
        </footer>
      </div>
    );
  }
}

export default App;
