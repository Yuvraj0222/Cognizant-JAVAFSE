import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';
import './App.css';

/**
 * App Class Component
 * Displays Counter Application, Say Welcome (passing arguments),
 * Synthetic Event details, and embeds the Currency Convertor.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5 // Feature 1: Counter initialized to 5
    };
  }

  /**
   * Helper: Increment the counter state by 1
   */
  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  /**
   * Helper: Print greeting message in console or alert
   */
  sayHello = () => {
    console.log("Hello! React Event Handling Demo");
  };

  /**
   * Feature 1: Multiple Method Invocation
   * Triggered by the Increment button.
   * Calls two distinct functions: one to update state, and one to log greeting.
   */
  incrementAndGreet = () => {
    this.incrementCounter();
    this.sayHello();
  };

  /**
   * Feature 1: Decrement Counter
   * Triggered by Decrement button. Decreases state counter by 1.
   */
  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  /**
   * Feature 2: Say Welcome (Passing Arguments)
   * Receives a message string and alerts it.
   * Triggered with argument 'Welcome' using an arrow wrapper inside the element.
   */
  sayWelcome = (message) => {
    alert(message);
  };

  /**
   * Feature 3: Synthetic Event Example
   * Handles button press, demonstrating standard React SyntheticEvent properties.
   */
  handlePress = (e) => {
    // React events are instances of SyntheticEvent, a cross-browser wrapper
    // around the browser's native event. It has the same interface.
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
            {/* onClick triggers multiple events via incrementAndGreet */}
            <button onClick={this.incrementAndGreet} className="btn btn-increment">
              Increment
            </button>

            {/* onClick updates state directly via decrementCounter */}
            <button onClick={this.decrementCounter} className="btn btn-decrement">
              Decrement
            </button>

            {/* Passing parameters to an event handler using an arrow wrapper function */}
            <button onClick={() => this.sayWelcome("Welcome")} className="btn btn-welcome">
              Say Welcome
            </button>

            {/* Synthetic event is passed implicitly to handlePress */}
            <button onClick={this.handlePress} className="btn btn-press">
              Click on me
            </button>
          </div>
        </div>

        {/* Feature 4: Currency Convertor */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
