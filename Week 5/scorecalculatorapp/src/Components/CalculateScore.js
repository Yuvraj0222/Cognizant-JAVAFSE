import React from 'react';
import '../Stylesheets/mystyle.css';

/**
 * Helper function to convert a decimal fraction to a percentage string.
 * @param {number} decimal - The decimal value (e.g., 0.9467)
 * @returns {string} The formatted percentage (e.g., "94.67%")
 */
const percentToDecimal = (decimal) => {
  return (decimal * 100).toFixed(2) + "%";
};

/**
 * Helper function to calculate the score percentage based on total and goal marks.
 * @param {number} total - Student's total marks obtained
 * @param {number} goal - Target or maximum possible marks
 * @returns {string} The formatted score percentage
 */
const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

/**
 * CalculateScore functional component
 * Renders details and calculates performance percentage.
 * 
 * Props:
 * - Name (string): Name of the student
 * - School (string): School/Institution name
 * - Total (number): Marks scored by the student
 * - Goal (number): Goal marks (total out of)
 */
const CalculateScore = ({ Name, School, Total, Goal }) => {
  // Automatically calculate the score percentage using the helper function
  const calculatedScore = calcScore(Total, Goal);

  return (
    <div className="container">
      <h2 className="heading">Student Details</h2>
      <div className="detail-card">
        <p className="detail-row">
          <span className="label">Name:</span> 
          <span className="name">{Name}</span>
        </p>
        <p className="detail-row">
          <span className="label">School:</span> 
          <span className="school">{School}</span>
        </p>
        <p className="detail-row">
          <span className="label">Total:</span> 
          <span className="total">{Total} Marks</span>
        </p>
        <p className="detail-row">
          <span className="label">Goal:</span> 
          <span className="goal">{Goal} Marks</span>
        </p>
        <p className="detail-row highlight">
          <span className="label">Score:</span> 
          <span className="score">{calculatedScore}</span>
        </p>
      </div>
    </div>
  );
};

export default CalculateScore;
