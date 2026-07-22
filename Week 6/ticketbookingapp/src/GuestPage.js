import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FlightDetails from './FlightDetails';
import LoginButton from './LoginButton';
import './App.css';

/**
 * GuestPage Component
 * Renders the dashboard view for unauthenticated users.
 */
const GuestPage = (props) => {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="main-content">
        <h2 className="welcome-heading">Welcome Guest</h2>
        <p className="welcome-message">You can browse available flights.</p>
        
        <FlightDetails />
        
        <div className="action-section">
          <p className="instruction-text">Please Login to Book Tickets.</p>
          {/* Invokes the login callback received via props */}
          <LoginButton onClick={props.onLogin} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GuestPage;
