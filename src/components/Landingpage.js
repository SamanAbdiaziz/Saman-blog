import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assests/img1.jpg';
import img5 from '../assests/img5.jpg';
import img6 from '../assests/img6.jpg';
import img7 from '../assests/img7.jpg';
import ImageSlider from './ImageSlider';

const images = [
    img1,
    img5,
    img6,
    img7
  ];
function Landingpage(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/blog') 
          .then(response => response.json())
          .then(data => setPosts(data))
          .catch(error => console.error('Error fetching data: ', error));
      }, []);


  return (
    <div>
      <ImageSlider images={images} interval={5000} /> {/* 3000ms = 3 seconds */}<br />

    <div className="card-container">
    {posts.map(post => (
          <div className="card" key={post.id}>
            <img src={post.image} alt={`Post ${post.id}`} className="card-img"/>
            <h3>{post.title}</h3>
            <p>{post.briefDescription}</p><br />
            <Link to={`/blog/${post.id}`}>Read More</Link>
         </div>
         ))}
    </div>
    </div>
  );
};

export default Landingpage;
