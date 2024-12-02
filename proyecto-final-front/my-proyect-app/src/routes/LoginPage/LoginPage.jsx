import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <div className="social-buttons">
        <button className="facebook-button">Facebook</button>
        <button className="google-button">Google</button>
      </div>
      <p>o también</p>
      <input type="email" placeholder="Correo electrónico" />
      <input type="password" placeholder="Contraseña" />
      <div className="remember-me">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">MANTENERME CONECTADO</label>
      </div>
      <button className="login-email-button">iniciar usando mi e-mail</button>
      <p className="forgot-password">¿Olvidó su contraseña?</p>
      <hr />
      <p>
        ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
}

export default LoginPage;
