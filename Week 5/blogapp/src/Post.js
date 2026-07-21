/**
 * Post Model Class
 * Represents a blog post object with id, title, and body properties.
 */
class Post {
  /**
   * Post Constructor
   * @param {number|string} id - Unique identifier for the post
   * @param {string} title - Title of the blog post
   * @param {string} body - Content body of the blog post
   */
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export default Post;
