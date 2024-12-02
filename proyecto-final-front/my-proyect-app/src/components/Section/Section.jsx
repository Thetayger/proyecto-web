// Section.jsx
import React, { useState } from 'react';
import '../Section/section.css';

const Section = ({ titleImage, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //Para el primer carrusel;
  const goToImage = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className="section">
      {titleImage && (
        <img src={titleImage} alt="Title" className="title-image" />
      )}

      <div className="carousel-container">
        <div className="carousel1">
          <div className="carousel1-track-container">
            <div className="carousel1-track"style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="carousel1-image"
                />
              ))}
            </div>
          </div>

          <div className="carousel1-nav">
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

export default Section;



