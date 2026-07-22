import React from 'react';

/**
 * IndianPlayers Component
 *
 * Demonstrates:
 * 1. ES6 Array Destructuring - Extract individual elements from arrays.
 * 2. ES6 Spread Operator (...) - Merge two arrays into one.
 * 3. ES6 map() - Render merged players to the UI.
 */

// Indian Team array for destructuring demonstrations
const IndianTeam = [
  "Sachin",
  "Sehwag",
  "Dravid",
  "Rohit",
  "Dhoni",
  "Raina",
  "Yuvaraj"
];

/**
 * OddPlayers Sub-Component
 *
 * ES6 Array Destructuring
 * -----------------------
 * Syntax: const [a, b, c, ...] = array;
 *
 * Array destructuring assigns individual array elements to named variables.
 * Here, we destructure the IndianTeam array to extract elements at odd
 * positions (1st, 3rd, 5th) using positional binding.
 */
const OddPlayers = () => {
  // Destructure all 7 elements from the IndianTeam array
  const [first, second, third, fourth, fifth, sixth, seventh] = IndianTeam;

  return (
    <div className="card">
      <h2 className="heading">Odd Players</h2>
      <ul className="player-list">
        <li className="player-item">First : {first}</li>
        <li className="player-item">Third : {third}</li>
        <li className="player-item">Fifth : {fifth}</li>
      </ul>
    </div>
  );
};

/**
 * EvenPlayers Sub-Component
 *
 * Also uses ES6 Array Destructuring to extract even-positioned players.
 */
const EvenPlayers = () => {
  // Destructure and extract even-positioned elements
  const [first, second, third, fourth, fifth, sixth, seventh] = IndianTeam;

  return (
    <div className="card">
      <h2 className="heading">Even Players</h2>
      <ul className="player-list">
        <li className="player-item">Second : {second}</li>
        <li className="player-item">Fourth : {fourth}</li>
        <li className="player-item">Sixth : {sixth}</li>
      </ul>
    </div>
  );
};

/**
 * MergedPlayers Sub-Component
 *
 * ES6 Spread Operator (...)
 * -------------------------
 * Syntax: const merged = [...array1, ...array2];
 *
 * The spread operator expands an iterable (like an array) into individual
 * elements. When used inside array literal brackets, it effectively
 * concatenates multiple arrays into a single new array.
 */

// T20 team players
const T20Players = [
  "First Player",
  "Second Player",
  "Third Player"
];

// Ranji Trophy players
const RanjiTrophyPlayers = [
  "Fourth Player",
  "Fifth Player",
  "Sixth Player"
];

/**
 * Merge two arrays using the ES6 Spread Operator
 * This creates a new array containing all elements from both arrays.
 */
const IndianPlayers = [
  ...T20Players,
  ...RanjiTrophyPlayers
];

const MergedPlayers = () => {
  return (
    <div className="card">
      <h2 className="heading">List of Indian Players Merged</h2>
      <ul className="player-list">
        {/**
         * ES6 map() to render the merged array
         * Each player is prefixed with "Mr." as per the lab requirement.
         */}
        {IndianPlayers.map((player, index) => (
          <li className="player-item" key={index}>
            Mr. {player}
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * IndianPlayersSection Component
 * Wraps all three sub-components (OddPlayers, EvenPlayers, MergedPlayers)
 * under a single heading "Indian Team".
 */
const IndianPlayersSection = () => {
  return (
    <div>
      <h1 className="section-title">Indian Team</h1>
      <OddPlayers />
      <EvenPlayers />
      <MergedPlayers />
    </div>
  );
};

export default IndianPlayersSection;
