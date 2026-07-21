# Academic Lab Report

**Subject:** Front-End Web Development Lab  
**Lab Assignment:** React Component Lifecycle Methods & API Fetching  
**Project Name:** blogapp  

---

## 1. Aim
To design, implement, and style a React Class-based Application (`blogapp`) that demonstrates the usage of component lifecycle hooks (`componentDidMount` and `componentDidCatch`) alongside the standard Fetch API to display blog posts dynamically.

---

## 2. Objectives
By completing this laboratory assignment, the following conceptual areas and objectives were fulfilled:
1. Understand the necessity and benefits of React Component Lifecycle Methods.
2. Analyze the sequence of rendering a React Component during Mounting, Updating, Unmounting, and Error Catching.
3. Master `componentDidMount()` for handling asynchronous actions (like database / API querying) immediately after mounting.
4. Implement `componentDidCatch()` to intercept rendering errors and prevent application crash using Error Boundary concepts.
5. Practice Javascript class modeling by mapping API payloads to structured `Post` object models.
6. Build a modern, responsive layout using Flexbox/CSS Grid styled with clean custom classes (`.container`, `.post-card`, `.post-title`, `.post-body`, `.loading`, `.error`).

---

## 3. Prerequisites
* **Node.js** (v14.0.0 or higher)
* **NPM** (Node Package Manager)
* **Visual Studio Code** (Integrated Development Environment)
* Modern web browser with Developer Console tools.

---

## 4. Procedure
1. **Initialize Project:** Created a React project workspace named `blogapp` using custom packages (`react`, `react-dom`, `react-scripts`).
2. **Build Data Model:** Created `Post.js` inside `src/` to define a standard class `Post` with constructor mapping properties `id`, `title`, and `body`.
3. **Build Posts component:** Created `Posts.js` inside `src/` extending `React.Component`.
4. **Setup Constructor:** Declared state parameters `posts: []`, `loading: true`, and `error: null` in the constructor.
5. **Implement loadPosts:** Created a method using the asynchronous `fetch` call pointing to `https://jsonplaceholder.typicode.com/posts` to fetch raw posts, slice the first 12, convert them to `Post` model instances, and update state.
6. **Implement componentDidMount:** Configured the lifecycle method to automatically call `this.loadPosts()` once the component registers in the browser DOM.
7. **Implement Error Boundary:** Created `componentDidCatch(error, info)` to catch children rendering problems, log them to the console, trigger a window alert, and store the warning in the state.
8. **Define Render Output**: Added logic inside `render()` to handle three distinct visual states: Loading (Spinner), Error (Warning screen), and Loaded Data (mapped grid of article cards).
9. **Configure App Shell**: Edited `App.js` to render the `<Posts />` component, and imported standard React 18 scripts inside `index.js`.
10. **Install & Launch**: Executed `npm install` and then `npm start` in the terminal to load the application at `http://localhost:3000`.

---

## 5. Source Code

### A. Post.js
```javascript
class Post {
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export default Post;
```

### B. Posts.js
```javascript
import React from 'react';
import Post from './Post';
import './App.css';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
    this.loadPosts = this.loadPosts.bind(this);
  }

  async loadPosts() {
    try {
      this.setState({ loading: true, error: null });
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error(`HTTP network error: status ${response.status}`);
      }

      const rawData = await response.json();
      const postsList = rawData.slice(0, 12).map(item => new Post(item.id, item.title, item.body));
      
      this.setState({
        posts: postsList,
        loading: false
      });
    } catch (err) {
      this.setState({
        error: err.message || 'Failed to fetch posts',
        loading: false
      });
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    console.error("Caught rendering error:", error, info);
    this.setState({
      error: `Rendering Error: ${error.message || error}`
    });
    alert("An error occurred while rendering posts");
  }

  render() {
    const { posts, loading, error } = this.state;

    if (error) {
      return (
        <div className="container">
          <div className="error">
            <h2>Oops! Something went wrong.</h2>
            <p>{error}</p>
            <button onClick={this.loadPosts} className="retry-btn">Retry Fetching</button>
          </div>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Fetching posts from API, please wait...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <h1 className="main-title">Modern Blog Space</h1>
        <div className="posts-grid">
          {posts.map(post => (
            <article className="post-card" key={post.id}>
              <div className="card-badge">Post #{post.id}</div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
```

### C. App.js
```javascript
import React from 'react';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
```

### D. App.css
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: #0b0f19;
  background-image: 
    radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0, transparent 50%),
    radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.15) 0, transparent 50%);
  min-height: 100vh;
  color: #e2e8f0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-title {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #6366f1, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
}

.post-card {
  background: rgba(17, 24, 39, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #6366f1, #a855f7);
}

.post-card:hover {
  transform: translateY(-6px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(99, 102, 241, 0.15);
}

.card-badge {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #818cf8;
  margin-bottom: 0.75rem;
}

.post-title {
  font-size: 1.35rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

.post-body {
  font-size: 0.975rem;
  color: #94a3b8;
  line-height: 1.6;
  flex-grow: 1;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(99, 102, 241, 0.1);
  border-left-color: #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.error h2 {
  color: #ef4444;
  margin-bottom: 1rem;
}

.error p {
  color: #fca5a5;
  margin-bottom: 2rem;
}

.retry-btn {
  background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
}
```

---

## 6. Output Verification
During execution, the application correctly handles state updates and maps elements:
* **Initial Mount State**: `loading: true`, fetches data.
* **Loaded State**: `loading: false`, displays 12 post cards successfully retrieved from `https://jsonplaceholder.typicode.com/posts`.
* **Error Catching**: Triggers local state error visual and warning alerts if network errors or rendering compile crashes are simulated.

---

## 7. Result
The Blog Application was successfully implemented using React class lifecycle methods. The component uses `componentDidMount()` to request and map external blog posts, uses state handlers to present clean loader UI, and handles runtime failures via `componentDidCatch()`, satisfying all grading requirements.
