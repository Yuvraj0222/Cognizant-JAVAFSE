/**
 * ============================================================================
 * Component: Home
 * File: src/Components/Home.js
 * Description: React Class Component representing the Home Page of the Student
 *              Management Portal. Extends React.Component and implements constructor
 *              and render lifecycle methods.
 * ============================================================================
 */

import React, { Component } from 'react';

/**
 * Class Component: Home
 * 
 * Class components are ES6 classes that extend React.Component and must encapsulate
 * a render() method to return JSX elements.
 */
class Home extends Component {
  /**
   * Component Constructor
   * 
   * Initializes component instance. Calls super(props) to pass properties to the
   * base React.Component parent class.
   * 
   * @param {Object} props - Properties passed down from parent component.
   */
  constructor(props) {
    // Mandatory call to parent class constructor
    super(props);

    // Optional local state initialization can be performed here if needed
    this.state = {
      pageTitle: "Home Page"
    };
  }

  /**
   * render() Lifecycle Method
   * 
   * Required method in all Class Components. Examines this.props and this.state
   * and returns the JSX element tree to be rendered on screen.
   * 
   * @returns {JSX.Element} The visual UI markup for the Home component.
   */
  render() {
    return (
      <div className="component-card home-card">
        <div className="card-header">
          <span className="card-badge">🏠 Component 1</span>
          <span className="card-type">React Class Component</span>
        </div>
        <h2 className="portal-heading">
          Welcome to the Home Page of Student Management Portal
        </h2>
        <p className="card-description">
          This section serves as the central hub for accessing student records, enrollment status, and academic announcements.
        </p>
      </div>
    );
  }
}

// Export Home component as default export for modular import in App.js
export default Home;
