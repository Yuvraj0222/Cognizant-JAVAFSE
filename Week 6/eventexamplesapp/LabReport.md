# Academic Lab Report

**Subject:** Front-End Web Development Lab  
**Lab Assignment:** React Events, Synthetic Events, and Form Event Handling  
**Project Name:** eventexamplesapp  

---

## 1. Aim
To design, implement, and style a React application (`eventexamplesapp`) that demonstrates various event handling techniques, synthetic events, form state management, passing parameters, and multiple method invocation.

---

## 2. Objectives
By completing this laboratory assignment, the following conceptual areas and objectives were fulfilled:
1. Explain the mechanism of React Events and the Event Delegation system.
2. Master `SyntheticEvent` properties and cross-browser abstractions.
3. Handle event binding in class-based components, comparing constructors and arrow configurations.
4. Implement parameter passing to event handlers (`sayWelcome("Welcome")`).
5. Execute multiple functions from a single click event (`incrementAndGreet`).
6. Manage form event controls (`onChange`, `onSubmit`) using controlled components.
7. Build an interactive Currency Convertor converting Indian Rupees to Euros (1 Euro = 90 INR).
8. Design responsive, card-styled layouts conforming to modern web standards.

---

## 3. Prerequisites
* **Node.js** (v14.0.0 or higher)
* **NPM** (Node Package Manager)
* **Visual Studio Code** (Integrated Development Environment)
* Browser with developer tools.

---

## 4. Procedure
1. **Initialize Project Folder:** Configured `eventexamplesapp` containing dependency setup.
2. **Implement Currency Convertor Component:** Created `CurrencyConvertor.js` under `src/components/` carrying `onChange` updates and `onSubmit` calculations.
3. **Build Core Application Logic:** Set up `App.js` with `counter` state initialized to 5.
4. **Implement Multiple Method Invocation:** Added `incrementAndGreet` executing state additions and console hello logs.
5. **Implement Parameter Passing:** Created `sayWelcome` triggered with a custom string parameter.
6. **Implement Synthetic Event Demonstration:** Configured `handlePress` binding `onClick` events.
7. **Configure Stylesheet:** Edited `App.css` centering layouts and styling button controls.
8. **Mount Component Tree:** Bound rendering nodes inside `index.js`.
9. **Build & Run:** Executed package installer and launched dev server.

---

## 5. Source Code

### A. CurrencyConvertor.js
```javascript
import React, { Component } from 'react';
import '../App.css';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: 'Euro',
      result: null
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { amount } = this.state;
    const numAmount = parseFloat(amount);

    if (isNaN(numAmount) || numAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const converted = (numAmount / 90).toFixed(2);
    const resultString = `${converted} Euro`;

    this.setState({
      result: resultString
    });

    alert(`Converted Amount: ${resultString}`);
  };

  render() {
    return (
      <div className="card converter-card">
        <h2 className="converter-heading">Currency Convertor!!!</h2>
        
        <form onSubmit={this.handleFormSubmit} className="converter-form">
          <div className="form-group">
            <label htmlFor="amount">Amount (INR):</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter amount in INR"
              value={this.state.amount}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="currency">Currency:</label>
            <input
              type="text"
              id="currency"
              name="currency"
              value={this.state.currency}
              onChange={this.handleInputChange}
              readOnly
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {this.state.result && (
          <div className="conversion-result">
            <h3>Result: {this.state.result}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
```

### B. App.js
```javascript
import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    };
  }

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  sayHello = () => {
    console.log("Hello! React Event Handling Demo");
  };

  incrementAndGreet = () => {
    this.incrementCounter();
    this.sayHello();
  };

  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handlePress = (e) => {
    console.log("Synthetic Event Type:", e.type);
    alert("I was clicked");
  };

  render() {
    return (
      <div className="container">
        <h1 className="main-title">React Event Handling Demo</h1>

        <div className="card counter-card">
          <h2>Counter Value</h2>
          <div className="counter-display">{this.state.counter}</div>

          <div className="button-group">
            <button onClick={this.incrementAndGreet} className="btn btn-increment">
              Increment
            </button>
            <button onClick={this.decrementCounter} className="btn btn-decrement">
              Decrement
            </button>
            <button onClick={() => this.sayWelcome("Welcome")} className="btn btn-welcome">
              Say Welcome
            </button>
            <button onClick={this.handlePress} className="btn btn-press">
              Click on me
            </button>
          </div>
        </div>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
```

---

## 6. Output Verification

### Interactions Tested
1. **Increment Button**: Increases counter value state by 1 and outputs a hello message in console logs.
2. **Decrement Button**: Decreases counter value by 1.
3. **Say Welcome Button**: Triggers browser alert containing the message `Welcome`.
4. **Click on me Button**: Triggers synthetic event console logs and displays an alert stating `I was clicked`.
5. **Currency Convertor Form**: Submitting 900 INR computes `10.00 Euro`, triggering an alert showing the result and rendering the result card.

---

## 7. Result
The React Event Handling Application successfully demonstrated event handlers, synthetic event mechanics, state modifications, form validations, parameter passing, and multiple event calls under a single interaction.
