// ImageCarousel.jsx
import React, { useState } from 'react';
import '../Main/ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Función para avanzar a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % totalImages);
  };

  // Función para retroceder a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
  };

  //Función para botones debajo del carrusel
  const goToImage = (index) => {
    setCurrentIndex(index);
  }

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevious}>
        ◀️
      </button>

      <div className="carousel-track-container">
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>

      <button className="carousel-button next" onClick={goToNext}>
        ▶️
      </button>

      {/* Botones de navegación debajo del carrusel */}
      <div className="carousel-nav">
        {images.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          >
          
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

