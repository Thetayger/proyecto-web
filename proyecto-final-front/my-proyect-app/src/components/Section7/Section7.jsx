// Section7.jsx
import React, { useState } from 'react';
import '../Section7/section7.css';

const Section7 = ({ titleImage7, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Para el primer carrusel
    const goToImage = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="Section7">
        {titleImage7 && (
          <img src={titleImage7} alt="Title" className="title-image7" />
        )}
  
        <div className="carousel-container">
          <div className="carousel7">
            <div className="carousel7-track-container">
              <div
                className="carousel7-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel7-image"
                  />
                ))}
              </div>
            </div>
  
            <div className="carousel7-nav">
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
  
  export default Section7;