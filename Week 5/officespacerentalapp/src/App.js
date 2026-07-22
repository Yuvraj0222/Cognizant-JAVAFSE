import React from 'react';
import './App.css';

/**
 * Importing a local image asset.
 * In React (with react-scripts / Webpack), images can be imported as
 * JavaScript modules. The import returns a resolved URL string that
 * can be used directly in JSX <img> src attributes.
 */
import officeImage from './assets/office.png';

/**
 * ======================================================================
 * SINGLE OFFICE OBJECT
 * ======================================================================
 * A JavaScript object containing office details.
 * JavaScript Expressions inside JSX:
 *   JSX allows embedding any valid JavaScript expression inside curly
 *   braces {}. Here we access object properties like office.Name,
 *   office.Rent, and office.Address.
 */
const office = {
  Name: "DBS",
  Rent: 50000,
  Address: "Chennai"
};

/**
 * ======================================================================
 * OFFICE SPACES ARRAY
 * ======================================================================
 * An array of office space objects for list rendering.
 * Each object contains Name, Rent, Address, and Image properties.
 * We reuse the same imported image for all cards in this demo.
 */
const officeSpaces = [
  {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai",
    Image: officeImage
  },
  {
    Name: "WeWork",
    Rent: 75000,
    Address: "Bangalore",
    Image: officeImage
  },
  {
    Name: "Regus",
    Rent: 65000,
    Address: "Hyderabad",
    Image: officeImage
  },
  {
    Name: "SmartWorks",
    Rent: 45000,
    Address: "Pune",
    Image: officeImage
  }
];

/**
 * ======================================================================
 * APP COMPONENT
 * ======================================================================
 * This component demonstrates the following JSX features:
 *
 * 1. JSX Elements        - HTML-like tags compiled to React.createElement()
 * 2. JSX Attributes       - src, alt, className, style, key
 * 3. JSX Expressions      - {office.Name}, {office.Rent} inside curly braces
 * 4. JSX Lists            - Rendering arrays with map()
 * 5. Inline CSS           - style={{ color: "red" }} object syntax
 * 6. Conditional Styling  - Ternary operator to set color based on Rent
 * 7. Rendering to DOM     - ReactDOM.createRoot().render() in index.js
 */
function App() {
  return (
    <div className="container">

      {/**
       * JSX Element: Page Heading
       * -------------------------
       * JSX allows writing HTML-like syntax directly in JavaScript.
       * This <h1> tag is a JSX element. At build time, Babel compiles it to:
       *   React.createElement("h1", { className: "page-title" }, "Office Space...")
       */}
      <h1 className="page-title">Office Space , at Affordable Range</h1>

      {/**
       * JSX Element: Hero Image
       * -----------------------
       * JSX Attributes work like HTML attributes but use camelCase for
       * multi-word attributes (e.g., className instead of class).
       * The `src` attribute uses a JavaScript Expression {officeImage}
       * to reference the imported image module.
       */}
      <div className="hero-section">
        <img
          src={officeImage}
          alt="Office Space"
          className="hero-image"
        />
      </div>

      {/**
       * JSX Expressions: Rendering a Single Object
       * --------------------------------------------
       * Curly braces {} allow embedding any JavaScript expression inside JSX.
       * Here we access properties of the `office` object to display its details.
       */}
      <div className="single-office card">
        <h2 className="card-heading">Featured Office</h2>
        <p className="detail-line"><strong>Name:</strong> {office.Name}</p>
        <p className="detail-line"><strong>Rent:</strong> Rs. {office.Rent}</p>
        <p className="detail-line"><strong>Address:</strong> {office.Address}</p>
      </div>

      {/**
       * JSX Lists: Rendering Multiple Items with map()
       * -----------------------------------------------
       * The Array.map() method iterates over the officeSpaces array.
       * For each office object, it returns a JSX card element.
       *
       * Key Prop:
       *   React requires a unique `key` prop on each element in a list
       *   to efficiently track additions, removals, and re-ordering.
       */}
      <h2 className="section-heading">Available Office Spaces</h2>
      <div className="office-grid">
        {officeSpaces.map((officeItem, index) => (
          <div className="card office-card" key={index}>

            {/**
             * JSX Attribute: Image source from object property
             */}
            <img
              src={officeItem.Image}
              alt={officeItem.Name}
              className="office-image"
            />

            <div className="card-content">
              {/**
               * JSX Expression: Displaying the office name
               */}
              <h3 className="office-name">{officeItem.Name}</h3>

              {/**
               * Inline CSS with Conditional Styling
               * ------------------------------------
               * The `style` prop in React accepts a JavaScript object.
               * Property names must be camelCased (e.g., fontSize, not font-size).
               *
               * Here a ternary operator applies conditional coloring:
               *   - RED   if Rent < 60000  (affordable / below threshold)
               *   - GREEN if Rent >= 60000 (premium)
               *
               * Syntax: style={{ property: value }}
               *   - Outer {} = JSX expression delimiter
               *   - Inner {} = JavaScript object literal
               */}
              <h3
                style={{
                  color:
                    officeItem.Rent < 60000
                      ? "red"
                      : "green"
                }}
              >
                Rent: Rs. {officeItem.Rent}
              </h3>

              {/**
               * JSX Expression: Displaying the address
               */}
              <p className="office-address">Address: {officeItem.Address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
