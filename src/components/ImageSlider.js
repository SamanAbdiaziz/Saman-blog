import React, { useState, useEffect } from 'react';
import logo from '../assests/Dr Adan Saman-logos_white.png'

function ImageSlider({ images, interval }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  

  console.log(ImageSlider);
  return (
    <div className="image-slider-container">
      <img src={images[currentImageIndex]} alt="Slider" />
      <img src={logo} alt="Logo" className="slider-logo"/>
    </div>
  );
}

export default ImageSlider;
