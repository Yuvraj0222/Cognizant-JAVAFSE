# Academic Lab Report

**Subject:** Front-End Web Development Lab  
**Lab Assignment:** ES6 Features in React Applications  
**Project Name:** cricketapp (Cricket Player Management System)  

---

## 1. Aim
To demonstrate ES6 Features in React Applications including `map()`, `filter()`, arrow functions, array destructuring, the spread operator, and conditional rendering.

---

## 2. Objectives
1. Understand the core features introduced in ECMAScript 2015 (ES6).
2. Implement `map()` to iterate over player arrays and dynamically generate JSX list elements.
3. Implement `filter()` with arrow function callbacks to extract players matching a score condition.
4. Apply ES6 Arrow Functions as concise callback expressions and component declarations.
5. Use ES6 Array Destructuring to extract individual elements from an array by position.
6. Use the ES6 Spread Operator (`...`) to merge two separate arrays into one combined array.
7. Implement Conditional Rendering using a JavaScript `if-else` block controlled by a `flag` variable.
8. Explain the differences between `var`, `let`, and `const`, and understand ES6 Classes, Sets, and Maps.

---

## 3. Prerequisites
* **Node.js** (v14.0.0 or higher)
* **NPM** (Node Package Manager)
* **Visual Studio Code** (Integrated Development Environment)
* Modern web browser (Chrome, Firefox, Edge)

---

## 4. Procedure
1. **Create React Project:** Initialized the project workspace named `cricketapp`.
2. **Create Components Folder:** Set up `src/components/` to house all player components.
3. **Use map():** Created `ListofPlayers.js` with an array of 11 players; used `players.map()` to transform each object into an `<li>` element displaying `Mr. {name} {score}`.
4. **Use filter():** Created `ScoreBelow70.js`; applied `players.filter(player => player.score <= 70)` to select players scoring at or below 70.
5. **Apply Arrow Functions:** All component declarations and callback functions use ES6 arrow function syntax (`const Component = () => { ... }`).
6. **Apply Destructuring:** In `IndianPlayers.js`, destructured the `IndianTeam` array into 7 named variables (`const [first, second, third, ...] = IndianTeam`) and displayed odd-positioned and even-positioned players separately.
7. **Apply Spread Operator:** Merged `T20Players` and `RanjiTrophyPlayers` arrays using `const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers]` and displayed all merged players.
8. **Implement Conditional Rendering:** In `App.js`, used a `var flag = true` variable with an `if-else` block to conditionally render either the player listing components or the Indian team components.
9. **Run npm start:** Installed dependencies and launched the development server.

---

## 5. Source Code

### A. ListofPlayers.js
```javascript
import React from 'react';

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

const ListofPlayers = () => {
  return (
    <div className="card">
      <h2 className="heading">All Players</h2>
      <ul className="player-list">
        {players.map((player, index) => (
          <li className="player-item" key={index}>
            Mr. {player.name} <span className="score-badge">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { players };
export default ListofPlayers;
```

### B. ScoreBelow70.js
```javascript
import React from 'react';
import { players } from './ListofPlayers';

const playersBelow70 = players.filter(player => player.score <= 70);

const ScoreBelow70 = () => {
  return (
    <div className="card">
      <h2 className="heading">List of Players Having Scores Less Than 70</h2>
      <ul className="player-list">
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
```

### C. IndianPlayers.js
```javascript
import React from 'react';

const IndianTeam = ["Sachin","Sehwag","Dravid","Rohit","Dhoni","Raina","Yuvaraj"];

const OddPlayers = () => {
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

const EvenPlayers = () => {
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

const T20Players = ["First Player","Second Player","Third Player"];
const RanjiTrophyPlayers = ["Fourth Player","Fifth Player","Sixth Player"];
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

const MergedPlayers = () => {
  return (
    <div className="card">
      <h2 className="heading">List of Indian Players Merged</h2>
      <ul className="player-list">
        {IndianPlayers.map((player, index) => (
          <li className="player-item" key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

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
```

### D. App.js
```javascript
import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import IndianPlayersSection from './components/IndianPlayers';
import './App.css';

var flag = true;

function App() {
  if (flag === true) {
    return (
      <div className="container">
        <h1 className="section-title">List of Players</h1>
        <ListofPlayers />
        <ScoreBelow70 />
      </div>
    );
  } else {
    return (
      <div className="container">
        <IndianPlayersSection />
      </div>
    );
  }
}

export default App;
```

---

## 6. Output Verification

### When `flag = true`
| Section | Content |
| :--- | :--- |
| All Players | Jack (50), Michael (70), John (40), Ann (61), Elisabeth (61), Sachin (95), Dhoni (100), Virat (84), Jadeja (64), Raina (75), Rohit (80) |
| Score ≤ 70 | Jack (50), Michael (70), John (40), Ann (61), Elisabeth (61), Jadeja (64) |

### When `flag = false`
| Section | Content |
| :--- | :--- |
| Odd Players | First: Sachin, Third: Dravid, Fifth: Dhoni |
| Even Players | Second: Sehwag, Fourth: Rohit, Sixth: Raina |
| Merged Players | First Player, Second Player, Third Player, Fourth Player, Fifth Player, Sixth Player |

---

## 7. Result
The Cricket Player Management System successfully demonstrated ES6 features including `map()`, `filter()`, arrow functions, destructuring, the spread operator, and conditional rendering in React. Both conditional views (`flag = true` and `flag = false`) render correctly with professional styling.
