import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import IndianPlayersSection from './components/IndianPlayers';
import './App.css';

/**
 * App Component
 *
 * Demonstrates: ES6 Conditional Rendering using if-else
 *
 * A `flag` variable controls which set of components is rendered.
 * - flag === true  → Displays: All Players + Players with Score ≤ 70
 * - flag === false → Displays: Indian Team (Odd, Even, Merged Players)
 *
 * This is standard conditional rendering using a JavaScript if-else
 * statement inside the component body, prior to the return statement.
 */

// Toggle this flag to switch between the two views
var flag = true;

function App() {
  /**
   * Conditional Rendering using if-else
   * ------------------------------------
   * React supports conditional rendering by using standard JavaScript
   * control flow (if-else, ternary operators, logical &&) to decide
   * which components or elements to return from a component's render.
   *
   * Here we use a simple if-else block:
   * - If flag is true: render ListofPlayers and ScoreBelow70
   * - If flag is false: render IndianPlayersSection (Odd, Even, Merged)
   */
  if (flag === true) {
    return (
      <div className="container">
        <h1 className="section-title">List of Players</h1>

        {/* Component 1: Uses ES6 map() to list all 11 players */}
        <ListofPlayers />

        {/* Component 2: Uses ES6 filter() + arrow functions for score ≤ 70 */}
        <ScoreBelow70 />
      </div>
    );
  } else {
    return (
      <div className="container">
        {/* Component 3: Uses Destructuring + Spread Operator */}
        <IndianPlayersSection />
      </div>
    );
  }
}

export default App;
