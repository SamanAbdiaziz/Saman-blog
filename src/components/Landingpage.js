import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import img1 from '../assests/img1.jpg';
import img5 from '../assests/img5.jpg';
import img6 from '../assests/img6.jpg';
import img7 from '../assests/img7.jpg';

const images = [img1, img5, img6, img7];

function Landingpage() {
  const [posts, setPosts] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('http://localhost:8001/blog')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="landing-container"> {/* Added dark background and white text */}<br />
    <h1 className="text-center">Welcome<br /> to Dr. Adan Saman's Blog</h1><br />
      <div className={`image-slider ${isScrolled ? 'image-slider-hidden' : ''}`}>
        <ImageSlider images={images} interval={5000} />
      </div>

      <div className="container mt-4">
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
    </div>
  );
}

export default Landingpage;
