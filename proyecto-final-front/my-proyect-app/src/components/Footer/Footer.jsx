// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="footer-section">
          <div className="footer-column">
            <h3>Acerca de Tai Loy</h3>
            <div className="footer-links">
              <a href="#">Nosotros</a>
              <a href="#">Nuestras Tiendas</a>
            </div>
          </div>
  
          <div className="footer-column">
            <h3>Libro de Reclamaciones</h3>
            <img src="/imgFooter/LibrodeReclamaciones.jpg" alt="Libro de Reclamaciones" />
          </div>
  
          <div className="footer-column">
            <h3>Servicio al Cliente</h3>
            <div className="footer-links">
              <a href="#">Contáctanos</a>
              <a href="#">Comprobantes Electrónicos</a>
              <a href="#">Legales Promocionales</a>
              <a href="#">Términos y Condiciones</a>
              <a href="#">Cambios y Devoluciones</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Política de Cookies</a>
            </div>
          </div>
  
          <div className="footer-column">
            <h3>Taiclub</h3>
            <div className="footer-links">
              <a href="#">Registro</a>
              <a href="#">Revisa tus puntos</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Proveedor</h3>
            <div className="footer-links">
                <a href="#">Portal Proveedores</a>
                <a href="#">Clientes con contratos</a>
            </div>

          </div>

        </div>
  
        <div className="footer-bottom">
          <div className="footer-left">
            
            <div className="social-media">
              <img src="/imgFooter/facebook.png" alt="Facebook" />
              <img src="/imgFooter/X.jpg" alt="X" />
              <img src="/imgFooter/instagram.png" alt="Instagram" />
            </div>
            <a>TAILOY S.A RUC: 20100049181</a>
          </div>
  
          <div className="footer-right">
            <h3>Medios de Pago</h3>
            <div className="payment-methods">
              <img src="/imgFooter/visa.png" alt="Visa" />
              <img src="/imgFooter/mastercard.png" alt="Mastercard" />
              <img src="/imgFooter/pago.png" alt="Pago" />
              <img src="/imgFooter/logo_cuotealo.png" alt="Cuotealo" />
              <img src="/imgFooter/logo-Safetypay.jpg" alt="Safety" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;