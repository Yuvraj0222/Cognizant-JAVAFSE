import React, { Component } from 'react';
import '../App.css';

/**
 * CurrencyConvertor Class Component
 * Demonstrates:
 * 1. Form Event Handling (onSubmit)
 * 2. Input Event Handling (onChange)
 * 3. State Management
 */
class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',       // Store input amount (in INR)
      currency: 'Euro', // Store targeted currency (fixed to Euro in this lab)
      result: null      // Store conversion result
    };
  }

  /**
   * Handle changes in input fields.
   * onChange is triggered every time a key is pressed.
   * Event object 'e' is a React SyntheticEvent containing the target properties.
   */
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  /**
   * Handle form submission.
   * onSubmit is triggered when the submit button or enter is pressed.
   * e.preventDefault() is used to prevent default browser page reload.
   */
  handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent standard page reload
    const { amount } = this.state;
    const numAmount = parseFloat(amount);

    if (isNaN(numAmount) || numAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Conversion rate: 1 Euro = 90 INR
    const converted = (numAmount / 90).toFixed(2);
    const resultString = `${converted} Euro`;

    this.setState({
      result: resultString
    });

    // Alert the result as requested in the requirements
    alert(`Converted Amount: ${resultString}`);
  };

  render() {
    return (
      <div className="card converter-card">
        {/* Requirement: The heading color should be green (styled using CSS class or inline styling) */}
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

        {/* Display result below the form for convenience */}
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
