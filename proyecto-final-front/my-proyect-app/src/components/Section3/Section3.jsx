// Section3.jsx
import React, { useState } from 'react';
import '../Section3/section3.css';

const Section3 = ({ titleImage3, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Para el primer carrusel
    const goToImage = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="Section3">
        {titleImage3 && (
          <img src={titleImage3} alt="Title" className="title-image3" />
        )}
  
        <div className="carousel-container">
          <div className="carousel3">
            <div className="carousel3-track-container">
              <div
                className="carousel3-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel3-image"
                  />
                ))}
              </div>
            </div>
  
            <div className="carousel3-nav">
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
  
  export default Section3;