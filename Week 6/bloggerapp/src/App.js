import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import './App.css';

/**
 * App Component
 * Demonstrates:
 * 1. State management using useState.
 * 2. Method 1: Conditional Rendering using if-else.
 * 3. Method 2: Conditional Rendering using Element Variables.
 * 4. Method 3: Conditional Rendering using the Ternary Operator.
 * 5. Method 4: Conditional Rendering using Logical &&.
 */
function App() {
  // State Hook: tracks the current active view selected by the user
  // Options: "all", "courses", "books", "blogs"
  const [currentView, setCurrentView] = useState("all");

  // ======================================================================
  // METHOD 2: Element Variables
  // ======================================================================
  // We declare a variable 'elementContent' and assign a React element to it
  // conditionally based on the active state.
  let elementContent = null;
  if (currentView === "blogs") {
    elementContent = <BlogDetails />;
  }

  // ======================================================================
  // METHOD 1: Using if-else (for structural layout toggle)
  // ======================================================================
  // If the user clicks "Show All", we render the full side-by-side column view.
  // Otherwise, we render a filtered single-card view showcasing other methods.
  let mainContent;

  if (currentView === "all") {
    mainContent = (
      <div className="dashboard-grid">
        {/* Render columns side-by-side with green separator lines */}
        <CourseDetails />
        <div className="divider"></div>
        <BookDetails />
        <div className="divider"></div>
        <BlogDetails />
      </div>
    );
  } else {
    mainContent = (
      <div className="focused-view">
        {/* Showcases Method 3: Ternary Operator */}
        {/* Syntax: condition ? <Component1/> : <Component2/> */}
        {currentView === "courses" ? <CourseDetails /> : null}

        {/* Showcases Method 4: Logical && (Short-Circuit) */}
        {/* Syntax: condition && <Component/> */}
        {currentView === "books" && <BookDetails />}

        {/* Showcases Method 2: Element Variable */}
        {elementContent}
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />

      <main className="dashboard-main">
        {/* Dashboard Navigation Buttons to trigger Conditional Rendering */}
        <div className="button-nav">
          <button 
            className={`nav-btn ${currentView === "all" ? "active" : ""}`}
            onClick={() => setCurrentView("all")}
          >
            Show All (if-else)
          </button>
          
          <button 
            className={`nav-btn ${currentView === "courses" ? "active" : ""}`}
            onClick={() => setCurrentView("courses")}
          >
            Show Courses (Ternary)
          </button>

          <button 
            className={`nav-btn ${currentView === "books" ? "active" : ""}`}
            onClick={() => setCurrentView("books")}
          >
            Show Books (Logical &&)
          </button>

          <button 
            className={`nav-btn ${currentView === "blogs" ? "active" : ""}`}
            onClick={() => setCurrentView("blogs")}
          >
            Show Blogs (Element Var)
          </button>
        </div>

        {/* Render main content dynamically determined by conditional methods */}
        {mainContent}
      </main>

      <Footer />
    </div>
  );
}

export default App;
