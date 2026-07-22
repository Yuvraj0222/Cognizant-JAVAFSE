import React from 'react';

/**
 * ListofPlayers Component
 *
 * Demonstrates:
 * 1. ES6 map() - Iterates over the players array to produce JSX elements.
 * 2. ES6 Arrow Functions - Used as callbacks inside map().
 * 3. Template literals / JSX expressions for dynamic content.
 *
 * The map() method creates a new array populated with the results of calling
 * a provided function on every element in the calling array. Here it transforms
 * each player object into an <li> element.
 */

// Array of 11 cricket players with name and score properties
const players = [
  { name: "Jack", score: 50 },
  { name: "Michael", score: 70 },
  { name: "John", score: 40 },
  { name: "Ann", score: 61 },
  { name: "Elisabeth", score: 61 },
  { name: "Sachin", score: 95 },
  { name: "Dhoni", score: 100 },
  { name: "Virat", score: 84 },
  { name: "Jadeja", score: 64 },
  { name: "Raina", score: 75 },
  { name: "Rohit", score: 80 }
];

/**
 * Arrow Function Component
 * Uses ES6 arrow function syntax: const Component = () => { ... }
 * This is more concise than traditional function declarations and
 * lexically binds the `this` context.
 */
const ListofPlayers = () => {
  return (
    <div className="card">
      <h2 className="heading">All Players</h2>
      <ul className="player-list">
        {/**
         * ES6 map() Method
         * ----------------
         * Syntax: array.map((element, index) => JSX)
         *
         * map() iterates over each player in the `players` array.
         * For each player, it returns an <li> element displaying
         * the player's name prefixed with "Mr." and their score.
         *
         * The `key` prop is required by React for list items to
         * efficiently track and re-render changes.
         */}
        {players.map((player, index) => (
          <li className="player-item" key={index}>
            Mr. {player.name} <span className="score-badge">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the players array as well so other components can reuse it
export { players };
export default ListofPlayers;
