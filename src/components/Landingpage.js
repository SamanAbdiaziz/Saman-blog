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
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // Set to true if scrolled past a certain point (e.g., 200px)
        setIsScrolled(window.scrollY > 600);
      };
    
      // Listen for scroll events
      window.addEventListener('scroll', handleScroll);
    
      // Clean up the event listener
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        fetch('http://localhost:8001/blog') 
          .then(response => response.json())
          .then(data => setPosts(data))
          .catch(error => console.error('Error fetching data: ', error));
      }, []);


  return (
    <div>
      <div className={`image-slider ${isScrolled ? 'image-slider-hidden' : ''}`}>
        <ImageSlider images={images} interval={5000} />
      </div>

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
