import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FlightDetails from './FlightDetails';
import LogoutButton from './LogoutButton';
import './App.css';

/**
 * UserPage Component
 * Renders the dashboard view for logged-in users.
 */
const UserPage = (props) => {
  const handleBookTicket = () => {
    alert("Ticket Booked Successfully!");
  };

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="main-content">
        {/* Logout button displayed at the top of the content area */}
        <div className="top-nav">
          <LogoutButton onClick={props.onLogout} />
        </div>

        <h2 className="welcome-heading">Welcome Back</h2>
        <p className="welcome-message success-message">You are successfully logged in.</p>
        
        <FlightDetails />
        
        <div className="action-section">
          {/* Green Book Ticket button */}
          <button onClick={handleBookTicket} className="btn book-btn">
            Book Ticket
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserPage;
