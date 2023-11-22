import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  console.log("Post ID:", postId);

  useEffect(() => {
    if (postId) {
      fetch(`http://localhost:8001/blog/${postId}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [postId]);
  
  
if (!post || Object.keys(post).length === 0) {
  return <div>Loading...</div>;
}

  return (
    <div className='blog container'>
      <h1>{post.title}</h1>
      <img src={post.image} alt={`Post ${postId}`} />
      <p>{post.briefDescription}</p>
      <div><p>{post.articleText}</p></div>
    </div>
  );
}

export default Blog;
