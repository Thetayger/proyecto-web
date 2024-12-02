// Section6.jsx
import React, { useState } from 'react';
import '../Section6/section6.css';

const Section6 = ({ titleImage6, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Para el primer carrusel
    const goToImage = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="Section6">
        {titleImage6 && (
          <img src={titleImage6} alt="Title" className="title-image6" />
        )}
  
        <div className="carousel-container">
          <div className="carousel6">
            <div className="carousel6-track-container">
              <div
                className="carousel6-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel6-image"
                  />
                ))}
              </div>
            </div>
  
            <div className="carousel6-nav">
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
  
  export default Section6;