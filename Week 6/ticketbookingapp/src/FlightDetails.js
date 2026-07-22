import React from 'react';
import './App.css';

/**
 * FlightDetails Component
 * Renders the table displaying available flights with sample data.
 */
const FlightDetails = () => {
  const flights = [
    { number: "AI101", airline: "Air India", source: "Delhi", destination: "Mumbai", time: "10:30 AM", price: "₹4500" },
    { number: "6E202", airline: "IndiGo", source: "Chennai", destination: "Bangalore", time: "01:15 PM", price: "₹3200" },
    { number: "UK303", airline: "Vistara", source: "Hyderabad", destination: "Kolkata", time: "06:45 PM", price: "₹5100" }
  ];

  return (
    <div className="flight-table-container">
      <table className="flight-table">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, idx) => (
            <tr key={idx}>
              <td>{flight.number}</td>
              <td className="airline-name">{flight.airline}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>{flight.time}</td>
              <td className="flight-price">{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightDetails;
