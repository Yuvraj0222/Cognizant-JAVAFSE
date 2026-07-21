/**
 * ============================================================================
 * Component: About
 * File: src/Components/About.js
 * Description: React Class Component representing the About Page of the Student
 *              Management Portal. Extends React.Component and implements constructor
 *              and render lifecycle methods.
 * ============================================================================
 */

import React, { Component } from 'react';

/**
 * Class Component: About
 * 
 * Demonstrates modular UI encapsulation using React Class Component architecture.
 */
class About extends Component {
  /**
   * Component Constructor
   * 
   * @param {Object} props - Properties passed down from parent component.
   */
  constructor(props) {
    // Call super constructor to initialize parent class features
    super(props);

    // Local component state
    this.state = {
      sectionName: "About Section"
    };
  }

  /**
   * render() Lifecycle Method
   * 
   * Returns JSX markup for rendering the About section.
   * 
   * @returns {JSX.Element} The UI markup for the About component.
   */
  render() {
    return (
      <div className="component-card about-card">
        <div className="card-header">
          <span className="card-badge">ℹ️ Component 2</span>
          <span className="card-type">React Class Component</span>
        </div>
        <h2 className="portal-heading">
          Welcome to the About Page of Student Management Portal
        </h2>
        <p className="card-description">
          This portal provides comprehensive management tools for tracking student academic performance, course registrations, and institutional metrics.
        </p>
      </div>
    );
  }
}

// Export About component for rendering in App.js
export default About;
