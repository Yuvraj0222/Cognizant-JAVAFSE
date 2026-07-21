/**
 * ============================================================================
 * Component: Contact
 * File: src/Components/Contact.js
 * Description: React Class Component representing the Contact Page of the Student
 *              Management Portal. Extends React.Component and implements constructor
 *              and render lifecycle methods.
 * ============================================================================
 */

import React, { Component } from 'react';

/**
 * Class Component: Contact
 * 
 * Represents the communication hub component of the Student Management Portal.
 */
class Contact extends Component {
  /**
   * Component Constructor
   * 
   * @param {Object} props - Component properties.
   */
  constructor(props) {
    // Invoke super(props) to bind properties to this.props
    super(props);

    // Initialize local component state
    this.state = {
      contactEmail: "support@studentportal.edu"
    };
  }

  /**
   * render() Lifecycle Method
   * 
   * Returns JSX element tree for the Contact component.
   * 
   * @returns {JSX.Element} Markup for Contact component.
   */
  render() {
    return (
      <div className="component-card contact-card">
        <div className="card-header">
          <span className="card-badge">📞 Component 3</span>
          <span className="card-type">React Class Component</span>
        </div>
        <h2 className="portal-heading">
          Welcome to the Contact Page of Student Management Portal
        </h2>
        <p className="card-description">
          For technical assistance, administrative inquiries, or academic support, contact the Student Support Desk.
        </p>
      </div>
    );
  }
}

// Export Contact component as default export
export default Contact;
