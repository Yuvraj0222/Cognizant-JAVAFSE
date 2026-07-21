import React from 'react';
import Post from './Post';
import './App.css';

/**
 * Posts Class Component
 * Implements React component lifecycle methods to fetch and display posts,
 * as well as handle rendering errors as an Error Boundary.
 */
class Posts extends React.Component {
  /**
   * Component Constructor
   * Initializes the state and binds functions.
   */
  constructor(props) {
    super(props);
    this.state = {
      posts: [],      // Array to store instances of the Post class
      loading: true,  // Boolean flag indicating network request status
      error: null     // Object/string to store error details
    };
    
    // Explicit binding (if loadPosts is called outside the normal scope)
    this.loadPosts = this.loadPosts.bind(this);
  }

  /**
   * Step 3: Implement loadPosts()
   * Fetches posts from jsonplaceholder API and maps them to Post class instances.
   */
  async loadPosts() {
    try {
      this.setState({ loading: true, error: null });
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error(`HTTP network error: status ${response.status}`);
      }

      const rawData = await response.json();
      
      // Map raw data array into Post model objects
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

  /**
   * Step 4: Implement componentDidMount()
   * Why componentDidMount() is used:
   * 1. It is called immediately after a component is mounted (inserted into the DOM tree).
   * 2. This is the standard location to initiate network requests/API calls so that data
   *    fetching starts as soon as the component layout exists, preventing blocking of the initial render.
   * 3. Setting state here will trigger an extra rendering, but it happens before the browser updates the screen,
   *    ensuring a smooth transition from loading UI to data UI.
   */
  componentDidMount() {
    // Automatically trigger API loading
    this.loadPosts();
  }

  /**
   * Step 6: Implement componentDidCatch()
   * Why componentDidCatch() is used:
   * 1. Acts as an Error Boundary hook to capture JavaScript errors anywhere in the child component tree.
   * 2. It logs error information and allows rendering a fallback UI instead of crashing the whole application.
   * 3. Used to display a friendly user message and execute side-effects like alerting the user or sending logs to a server.
   */
  componentDidCatch(error, info) {
    // Log the error details
    console.error("Caught rendering error:", error, info);
    
    // Update state to render fallback UI
    this.setState({
      error: `Rendering Error: ${error.message || error}`
    });
    
    // Display browser alert as requested
    alert("An error occurred while rendering posts");
  }

  /**
   * Step 5: Implement render()
   * Standard rendering function that returns the JSX structure based on state.
   */
  render() {
    const { posts, loading, error } = this.state;

    // Show error message if an error occurs (either fetch error or caught render error)
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

    // Show loading spinner/message while fetching API data
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

    // Render the grid list of posts once loading finishes successfully
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
