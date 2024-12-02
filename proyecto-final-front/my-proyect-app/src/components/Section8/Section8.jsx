// Section7.jsx
import React, { useState } from 'react';
import '../Section8/section8.css';


const Section8 = ({ titleImage8, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Para el primer carrusel
    const goToImage = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="Section8">
        {titleImage8 && (
          <img src={titleImage8} alt="Title" className="title-image8" />
        )}
  
        <div className="carousel-container">
          <div className="carousel8">
            <div className="carousel8-track-container">
              <div
                className="carousel8-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel8-image"
                  />
                ))}
              </div>
            </div>
  
            <div className="carousel8-nav">
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
  
  export default Section8;