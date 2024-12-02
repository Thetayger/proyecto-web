// Section2.jsx
import React, { useState } from 'react';
import '../Section2/section2.css';

const Section2 = ({ titleImage2, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Para el primer carrusel
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="section2">
      {titleImage2 && (
        <img src={titleImage2} alt="Title" className="title-image2" />
      )}

      <div className="carousel-container">
        <div className="carousel2">
          <div className="carousel2-track-container">
            <div
              className="carousel2-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="carousel2-image"
                />
              ))}
            </div>
          </div>

          <div className="carousel2-nav">
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

export default Section2;


