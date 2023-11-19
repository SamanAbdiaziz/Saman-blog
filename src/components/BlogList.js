import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/blog') // Adjust URL as per your setup
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className='container'>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <img src={post.image} alt={post.title} />
          <p>{post.briefDescription}</p>
          <Link to={`/blog/${post.id}`}>Read More</Link><br />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
