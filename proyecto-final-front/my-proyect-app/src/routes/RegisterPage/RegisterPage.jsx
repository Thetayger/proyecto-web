import React from 'react';
import './RegisterPage.css'; // Asegúrate de agregar estilos específicos aquí
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <h1>Registrarme</h1>
      <p>o también</p>
      <form className="register-form">
        <input type="email" placeholder="Correo electrónico" required />
        <input type="text" placeholder="Nombres" required />
        <input type="text" placeholder="Apellidos" required />
        <div className="row">
          <input type="date" placeholder="Fecha de nacimiento" required />
          <select required>
            <option value="">Sexo</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>
        <div className="row">
          <select required>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Carnet de Extranjería">Carnet de extranjería</option>
          </select>
          <input type="text" placeholder="DNI" required />
        </div>
        <input type="tel" placeholder="Número de teléfono" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="password" placeholder="Confirmar contraseña" required />
        <div className="auth-buttons">
            <button className="facebook-button">Facebook</button>
            <button className="google-button">Google</button>
        </div>
        <div className="checkboxes">
          <label>
            <input type="checkbox" required />
            <strong>He leído y acepto los términos y condiciones</strong>
          </label>
          <label>
            <input type="checkbox" />
            <strong>Declaro haber leido las politicas de privacidad y autorizo el tratamiento de mis datos conforme a ella</strong>
          </label>
          <label>
            <input type="checkbox" />
            <strong>Acepto el uso de datos personales para fines promocionales</strong>
          </label>
        </div>
        <button type="submit" className="register-button">Registrarme</button>
      </form>
      <p>
        ¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
