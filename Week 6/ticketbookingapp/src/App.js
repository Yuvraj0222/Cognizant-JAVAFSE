import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import './App.css';

/**
 * App Component
 * 
 * Manages the authentication state (`isLoggedIn`) and demonstrates
 * React Conditional Rendering using Functional Components and Hooks.
 */
function App() {
  // Hook State: isLoggedIn is initialized to false (unauthenticated)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**
   * Callback to set state to logged-in (true)
   */
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  /**
   * Callback to set state to logged-out (false)
   */
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  /**
   * Conditional Rendering:
   * If user is logged in, show UserPage.
   * If user is guest, show GuestPage.
   */
  if (isLoggedIn) {
    return <UserPage onLogout={handleLogout} />;
  } else {
    return <GuestPage onLogin={handleLogin} />;
  }
}

export default App;
