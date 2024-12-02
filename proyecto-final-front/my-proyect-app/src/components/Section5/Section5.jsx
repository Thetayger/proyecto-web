// Section5.jsx
import React, { useState } from 'react';
import '../Section5/section5.css';

const Section5 = ({ titleImage5, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Para el primer carrusel
    const goToImage = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="Section5">
        {titleImage5 && (
          <img src={titleImage5} alt="Title" className="title-image5" />
        )}
  
        <div className="carousel-container">
          <div className="carousel5">
            <div className="carousel5-track-container">
              <div
                className="carousel5-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel5-image"
                  />
                ))}
              </div>
            </div>
  
            <div className="carousel5-nav">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`nav-button ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Section5;