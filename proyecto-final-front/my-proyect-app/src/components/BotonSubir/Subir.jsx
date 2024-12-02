// Subir.jsx
import React from 'react';
import './Subir.css';

const SubirTopButton = () => {
  // Función para hacer scroll hacia arriba de forma suave
  const handleScroll = () => {
    window.scrollTo({
      top: 0,              // Subir a la parte superior
      behavior: 'smooth',  // Desplazamiento suave
    });
  };

  return (
    <button className="subir-top" onClick={handleScroll}>
      Subir
    </button>
  );
};

export default SubirTopButton;







