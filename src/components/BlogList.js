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
    <div className="container">
      <div className="row">
        {posts.map(post => (
          <div key={post.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={post.image} alt={post.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.briefDescription}</p>
                <Link to={`/blog/${post.id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
