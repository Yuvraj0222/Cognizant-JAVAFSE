# Cricket Player Management System using ES6 Features

## Introduction
A React application demonstrating core ES6 JavaScript features including `map()`, `filter()`, arrow functions, array destructuring, the spread operator, and conditional rendering through a cricket player management dashboard.

---

## ES6 Concepts Used
* **map()** — Iterating and transforming player arrays into JSX elements.
* **filter()** — Selecting players whose score is ≤ 70.
* **Arrow Functions** — Concise callback syntax used throughout all components.
* **Destructuring** — Extracting individual players from the IndianTeam array by position.
* **Spread Operator** — Merging T20Players and RanjiTrophyPlayers into a single array.
* **Conditional Rendering** — Toggling between two views using an `if-else` block controlled by a `flag` variable.

---

## Installation
```bash
npm install
npm start
```

The application will open at `http://localhost:3000` (or the next available port).

---

## Expected Output

### When Flag = true
Displays:
* **All Players** — 11 players listed with names and scores.
* **Players with score ≤ 70** — Filtered list showing only Jack (50), Michael (70), John (40), Ann (61), Elisabeth (61), Jadeja (64).

### When Flag = false
Displays:
* **Odd Players** — First (Sachin), Third (Dravid), Fifth (Dhoni).
* **Even Players** — Second (Sehwag), Fourth (Rohit), Sixth (Raina).
* **Merged Players** — All 6 players from T20 and Ranji Trophy arrays combined using the spread operator.

---

## Project Structure
```text
cricketapp
│
├── public
│   └── index.html
│
├── src
│   ├── components
│   │   ├── ListofPlayers.js
│   │   ├── ScoreBelow70.js
│   │   └── IndianPlayers.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```
