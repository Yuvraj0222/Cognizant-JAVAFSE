# Academic Lab Report: Session 2 - React Class Components

**Course Title**: Web Application Development / Front-End Engineering Lab  
**Lab Assignment No**: 02  
**Project Name**: `StudentApp`  
**Date**: July 22, 2026  

---

## 1. Aim

To design and implement a **Student Management Portal** web application using React Class Components (`Home`, `About`, and `Contact`) extending `React.Component`, featuring constructor state initialization, sequential component composition in `App.js`, and professional styling.

---

## 2. Objectives

1. Understand the architecture, syntax, and lifecycle of React Class Components.
2. Implement class inheritance using `class ComponentName extends Component`.
3. Utilize component constructors (`super(props)`) to initialize properties and state.
4. Implement the `render()` method to return JSX markup for individual page components.
5. Import and compose `Home`, `About`, and `Contact` components sequentially within `App.js`.
6. Apply professional CSS styling for center alignment, card layout, and responsive design.

---

## 3. Prerequisites

- **Node.js**: v14.0.0 or higher
- **NPM**: v6.0.0 or higher
- **Visual Studio Code**: Integrated Development Environment (IDE)

---

## 4. Procedure

### Step 1: Create React App
Open terminal and generate a new React application named `StudentApp`:
```bash
npx create-react-app StudentApp
cd StudentApp
```

### Step 2: Create Components Folder
Inside the `src` directory, create a new subfolder named `Components`:
```bash
mkdir src/Components
```

### Step 3: Create Home Component (`src/Components/Home.js`)
Create a Class Component extending `Component` with constructor and `render()` returning:
> `"Welcome to the Home Page of Student Management Portal"`

### Step 4: Create About Component (`src/Components/About.js`)
Create a Class Component extending `Component` with constructor and `render()` returning:
> `"Welcome to the About Page of Student Management Portal"`

### Step 5: Create Contact Component (`src/Components/Contact.js`)
Create a Class Component extending `Component` with constructor and `render()` returning:
> `"Welcome to the Contact Page of Student Management Portal"`

### Step 6: Modify `App.js`
Import `Home`, `About`, and `Contact` components into `src/App.js` and render them sequentially inside card containers.

### Step 7: Execute `npm start`
Run the local development server:
```bash
npm start
```

### Step 8: View Application on Localhost
Open web browser and navigate to:
```
http://localhost:3000
```

---

## 5. Source Code

### A. `src/Components/Home.js`
```jsx
/**
 * File: src/Components/Home.js
 */
import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { pageTitle: "Home Page" };
  }

  render() {
    return (
      <div className="component-card home-card">
        <div className="card-header">
          <span className="card-badge">🏠 Component 1</span>
          <span className="card-type">React Class Component</span>
        </div>
        <h2 className="portal-heading">
          Welcome to the Home Page of Student Management Portal
        </h2>
        <p className="card-description">
          This section serves as the central hub for accessing student records and announcements.
        </p>
      </div>
    );
  }
}

export default Home;
```

### B. `src/Components/About.js`
```jsx
/**
 * File: src/Components/About.js
 */
import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { sectionName: "About Section" };
  }

  render() {
    return (
      <div className="component-card about-card">
        <div className="card-header">
          <span className="card-badge">ℹ️ Component 2</span>
          <span className="card-type">React Class Component</span>
        </div>
        <h2 className="portal-heading">
          Welcome to the About Page of Student Management Portal
        </h2>
        <p className="card-description">
          This portal provides comprehensive management tools for tracking student performance.
        </p>
      </div>
    );
  }
}

export default About;
```

### C. `src/Components/Contact.js`
```jsx
/**
 * File: src/Components/Contact.js
 */
import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { contactEmail: "support@studentportal.edu" };
  }

  render() {
    return (
      <div className="component-card contact-card">
        <div className="card-header">
          <span className="card-badge">📞 Component 3</span>
          <span className="card-type">React Class Component</span>
        </div>
        <h2 className="portal-heading">
          Welcome to the Contact Page of Student Management Portal
        </h2>
        <p className="card-description">
          For technical assistance or academic support, contact the Student Support Desk.
        </p>
      </div>
    );
  }
}

export default Contact;
```

### D. `src/App.js`
```jsx
/**
 * File: src/App.js
 */
import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="portal-header">
          <div className="header-content">
            <h1 className="main-title">Student Management Portal</h1>
          </div>
        </header>

        <main className="portal-body">
          <section className="component-wrapper">
            <Home />
          </section>

          <section className="component-wrapper">
            <About />
          </section>

          <section className="component-wrapper">
            <Contact />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
```

---

## 6. Output

### Rendered Headings (Sequential Order):

1. **Home Component Output**:
   > **Welcome to the Home Page of Student Management Portal**

2. **About Component Output**:
   > **Welcome to the About Page of Student Management Portal**

3. **Contact Component Output**:
   > **Welcome to the Contact Page of Student Management Portal**

---

## 7. Result

The **Student Management Portal** was successfully implemented using React Class Components (`Home`, `About`, `Contact`) extending `React.Component`, featuring constructor initialization and the `render()` method. All components were rendered sequentially through the root `App` component on `http://localhost:3000`.
