import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8001/blog/${postId}`) // Use postId here
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, [postId]);
  

  console.log(Blog);
  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} alt={`Post ${postId}`} />
      <p>{post.briefDescription}</p>
      {/* Add more blog content based on fetched data */}
    </div>
  );
}

export default Blog;
