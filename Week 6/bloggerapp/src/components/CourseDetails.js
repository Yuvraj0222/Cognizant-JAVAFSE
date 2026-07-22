import React from 'react';
import { courses } from '../data';

/**
 * CourseDetails Component
 * Renders the list of available courses using ES6 map().
 * Demonstrates:
 * 1. Rendering Lists inside React.
 * 2. Uniquely assigning React keys (`key={course.id}`).
 * 3. Separation of Data (import from data.js) from UI layout.
 */
const CourseDetails = () => {
  return (
    <div className="detail-column">
      <h2 className="column-title">Course Details</h2>
      <div className="items-list">
        {/**
         * ES6 map() to dynamically render course items
         * Each item uses its unique id (`course.id`) as a React key.
         */}
        {courses.map(course => (
          <div className="item-card course-card" key={course.id}>
            <h3>{course.name}</h3>
            <p className="meta-text">Start Date: {course.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
