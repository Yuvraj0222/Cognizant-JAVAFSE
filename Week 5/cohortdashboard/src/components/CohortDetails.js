import React from 'react';

/**
 * CSS Module Import
 * -----------------
 * CSS Modules are imported as JavaScript objects. The imported `styles` object
 * contains all class names defined in the .module.css file as keys, and their
 * corresponding locally-scoped (unique) class names as values.
 *
 * This means `styles.box` will resolve to something like
 * "CohortDetails_box__xY3z1" at build time, ensuring no global collisions.
 */
import styles from "../CohortDetails.module.css";

/**
 * Sample cohort data array
 * Each object represents one training cohort at Cognizant Academy.
 */
const cohortData = [
  {
    cohortCode: "INTADMDF10 - .NET FSD",
    startDate: "22-Feb-2022",
    status: "Scheduled",
    coach: "Aathma",
    trainer: "Jojo Jose"
  },
  {
    cohortCode: "ADM21JF014 - Java FSD",
    startDate: "10-Sep-2021",
    status: "Ongoing",
    coach: "Apoorv",
    trainer: "Elisa Smith"
  },
  {
    cohortCode: "CDBJF21025 - Java FSD",
    startDate: "24-Dec-2021",
    status: "Ongoing",
    coach: "Aathma",
    trainer: "John Doe"
  }
];

/**
 * CohortDetails Functional Component
 *
 * Demonstrates two styling approaches in React:
 *
 * 1. CSS Modules (className property)
 *    - Each card is wrapped in a <div> that uses `className={styles.box}`.
 *    - The `.box` class comes from CohortDetails.module.css and is locally scoped.
 *
 * 2. Inline Styling (style property)
 *    - The <h3> heading uses the React `style` property, which accepts
 *      a JavaScript object with camelCased CSS properties.
 *    - A ternary operator implements conditional styling:
 *      green for "Ongoing" cohorts, blue for all others.
 */
const CohortDetails = () => {
  return (
    <div>
      <h2>Cohorts Details</h2>

      {/* Map over the cohort data array to render individual cards */}
      {cohortData.map((cohort, index) => (

        /**
         * className Property (CSS Module)
         * --------------------------------
         * `className={styles.box}` applies the locally-scoped `.box` class
         * from CohortDetails.module.css to this <div>.
         * React uses `className` instead of `class` because `class` is a
         * reserved keyword in JavaScript.
         */
        <div className={styles.box} key={index}>

          {/**
           * Inline Styling with Conditional Logic
           * --------------------------------------
           * The `style` property in React accepts a JavaScript object.
           * Here we conditionally set the text color:
           *   - "green" when the cohort status is "Ongoing"
           *   - "blue" for all other statuses (e.g., "Scheduled", "Completed")
           *
           * This demonstrates inline styling and dynamic/conditional styling
           * based on component data (props or local variables).
           */}
          <h3
            style={{
              color:
                cohort.status.toLowerCase() === "ongoing"
                  ? "green"
                  : "blue"
            }}
          >
            {cohort.cohortCode}
          </h3>

          {/* Definition list to display cohort metadata */}
          <dl>
            <dt>Started On</dt>
            <dd>{cohort.startDate}</dd>

            <dt>Current Status</dt>
            <dd>{cohort.status}</dd>

            <dt>Coach</dt>
            <dd>{cohort.coach}</dd>

            <dt>Trainer</dt>
            <dd>{cohort.trainer}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
};

export default CohortDetails;
