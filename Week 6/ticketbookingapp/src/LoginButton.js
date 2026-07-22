import React from 'react';
import './App.css';

/**
 * LoginButton Component
 * Reusable component that accepts an onClick callback via props.
 */
const LoginButton = (props) => {
  return (
    <button onClick={props.onClick} className="btn login-btn">
      Login
    </button>
  );
};

export default LoginButton;
