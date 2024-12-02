// Section4.jsx
import React, { useState } from 'react';
import '../Section4/section4.css';

const Section4 = ({ titleImage4, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Para el primer carrusel
    const goToImage = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="Section4">
        {titleImage4 && (
          <img src={titleImage4} alt="Title" className="title-image4" />
        )}
  
        <div className="carousel-container">
          <div className="carousel4">
            <div className="carousel4-track-container">
              <div
                className="carousel4-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel4-image"
                  />
                ))}
              </div>
            </div>
  
            <div className="carousel4-nav">
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
  
  export default Section4;