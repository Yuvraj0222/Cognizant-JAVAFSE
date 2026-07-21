import React from 'react';
import CalculateScore from './Components/CalculateScore';

/**
 * App Component
 * Serves as the main shell and renders the student score calculator component.
 */
function App() {
  return (
    <div className="App">
      {/* Rendering the CalculateScore component with sample data */}
      <CalculateScore
        Name="John"
        School="DNV Public School"
        Total={284}
        Goal={300}
      />
    </div>
  );
}

export default App;
