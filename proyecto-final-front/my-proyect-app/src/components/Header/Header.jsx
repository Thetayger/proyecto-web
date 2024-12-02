import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  // Array de imágenes
  const images = [
    'Banner+Web-v05.png',
    'bicentenario.jpg',
    'ofertabatman.jpg',
    'ofertaelectrodomesticos.jpg',
    'ofertaescritorio.jpg',
    'ofertaimpresora.jpg',
    'ofertamonster.jpg',
    'ofertatablets.jpg',
  ];

  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    switch (searchTerm.toLowerCase()) {
      case 'juguetes':
        navigate('/juguetes');
        break;
      case 'impresora':
        navigate('/impresoras');
        break;
      case 'cocina':
        navigate('/cocina');
        break;
      case 'arte':
        navigate('/arte');
        break;
      case 'electrohogar':
        navigate('/electrohogar');
        break;
      case 'laptops':
        navigate('/laptops');
        break;
      case 'tabletas':
        navigate('/tabletas');
        break;
      case 'televisores':
        navigate('/televisores');
        break;
      case 'topofertas':
        navigate('/topofertas');
        break;
      default:
        alert('Categoría no encontrada');
        break;
    }
  };

  return (
    <>
      {/* Barra Amarilla Superior */}
      <div className="promo-bar">
        <span>
          <img src="/imgHeader/camion.PNG" alt="camion" />
          <strong>DELIVERY GRATIS</strong> por compras desde <strong>s/ 199</strong>
          <span className="promo-note"> *Valido para Lima Metropolitana y Callao</span>
        </span>
      </div>

      <header className="header">
        {/* Logo */}
        <div className="logo">
          <img src="/imgHeader/logo.PNG" alt="Logo" />
        </div>

        {/* Menú de Categorías */}
        <div className="categories">
          <span>☰ CATEGORIAS</span>
        </div>

        {/* Barra de Búsqueda */}
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>

        {/* Íconos de Envío, Carrito y Usuario */}
        <div className="icons">
          <Link to="/seguimiento">
            <img src="/imgHeader/truck.PNG" alt="Envio" />
          </Link>
          <Link to="/carrito">
            <img src="/imgHeader/carrito.PNG" alt="Carrito" />
          </Link>
          <span className="cart-count">0</span>
        </div>

        {/* Bienvenida y Login */}
        <div className="user">
          <div className="user-text">
            <span>Hola</span>
            <Link to="/login">Iniciar sesión</Link>
          </div>
          <img src="/imgHeader/userIcon.PNG" alt="Usuario" />
        </div>
      </header>

      {/* Mostrar carrusel solo en páginas específicas (Ejemplo: no en la página principal) */}
      {location.pathname !== '/' && (
        <div className="image-carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={`/imgHeader/${image}`}
              alt={`Banner ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Header;





