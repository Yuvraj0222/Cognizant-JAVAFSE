import React from 'react';
import './App.css';

/**
 * LogoutButton Component
 * Reusable component that accepts an onClick callback via props.
 */
const LogoutButton = (props) => {
  return (
    <button onClick={props.onClick} className="btn logout-btn">
      Logout
    </button>
  );
};

export default LogoutButton;
