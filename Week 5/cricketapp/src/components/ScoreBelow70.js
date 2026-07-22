import React from 'react';
import { players } from './ListofPlayers';

/**
 * ScoreBelow70 Component
 *
 * Demonstrates:
 * 1. ES6 Arrow Functions - Used as the filter callback.
 * 2. ES6 filter() - Filters players whose score is <= 70.
 * 3. ES6 map() - Maps filtered results to JSX elements.
 *
 * filter() creates a new array with all elements that pass the
 * test implemented by the provided arrow function.
 */

/**
 * ES6 Arrow Function with filter()
 * ---------------------------------
 * Syntax: array.filter(element => condition)
 *
 * The arrow function `player => player.score <= 70` is a concise
 * callback that returns `true` for players with scores at or below 70.
 * filter() collects only those elements for which the callback returns true.
 */
const playersBelow70 = players.filter(
  player => player.score <= 70
);

const ScoreBelow70 = () => {
  return (
    <div className="card">
      <h2 className="heading">List of Players Having Scores Less Than 70</h2>
      <ul className="player-list">
        {/**
         * Chaining map() after filter()
         * Both are ES6 array methods that accept arrow function callbacks.
         */}
        {playersBelow70.map((player, index) => (
          <li className="player-item" key={index}>
            Mr. {player.name} <span className="score-badge">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreBelow70;
