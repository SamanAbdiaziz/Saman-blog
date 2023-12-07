import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';

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
    <div className={`landingpage-container ${isScrolled ? 'scrolled' : ''}`}>
      <Header />
      <Sidebar />
      <br /><br /><br /><br />
      <div className="containers bg-wheat">
    <hr />
      <h2>Blog List</h2>
      <hr /><br />
        <div className="card-containers bg-wheat">
          {posts.map(post => (
            <div key={post.id} className="col-md-4 mb-3">
              <div className="card bg-black">
                <img src={post.image} alt={post.title} className="card-img" />
                <div className="card-body">
                  <h5 className="card-title text-primary">{post.title}</h5>
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
