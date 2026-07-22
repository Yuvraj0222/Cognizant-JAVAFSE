# React Event Handling Demonstration Application

## Introduction

A modern React application demonstrating Event Handling, Event Binding, Synthetic Events, Parameter Passing, and Form Event Handling. The project includes a counter, an event-arg greeting button, an interactive synthetic event button, and a currency converter converting Indian Rupees to Euros.

---

## Concepts Demonstrated

* **React Events:** Standard event listeners (`onClick`, `onChange`, `onSubmit`) mapped using JSX bindings.
* **Event Handlers:** Structured methods defined in class components and arrow configurations.
* **Synthetic Events:** React's cross-browser event wrappers (SyntheticEvent).
* **Form Handling:** Controlled components updating state properties in real-time.
* **State Management:** Tracking variables (counter, input fields) in parent and sibling components.
* **Passing Parameters:** Utilizing inline arrow callback handlers to pass arguments (`sayWelcome("Welcome")`).
* **Multiple Event Invocation:** Coordinating multiple handler executions from a single click.

---

## Installation

Follow these steps to initialize and launch the application:

1. **Bootstrap the Project:**
   ```bash
   npx create-react-app eventexamplesapp
   ```

2. **Navigate into the Project Folder:**
   ```bash
   cd eventexamplesapp
   ```

3. **Install Node Packages:**
   ```bash
   npm install
   ```

4. **Launch the Local Development Server:**
   ```bash
   npm start
   ```
   *The server defaults to port `http://localhost:3000` (or `http://localhost:3005` in case of conflicts).*

---

## Expected Output

The UI provides two primary sections:
1. **Counter Value Card:**
   * Shows current counter (starting at 5).
   * **Increment button:** adds 1 to counter and triggers console hello log.
   * **Decrement button:** subtracts 1.
   * **Say Welcome button:** triggers browser alert popup "Welcome".
   * **Click on me button:** triggers synthetic event log and alert "I was clicked".
2. **Currency Convertor Card:**
   * Styled green heading.
   * Form capturing `Amount` and `Currency`.
   * **Submit button:** triggers calculation (INR/90) and displays result in alert box and card body.
