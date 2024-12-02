import React from 'react';
import '../Seguimiento/Seguimiento.css';

const Seguimiento = () => {
  return (
    <div className="seguimiento-container">
      <h1>Seguimiento de mi pedido</h1>
      <h2>Para consultar el estado de su pedido, por favor complete los siguientes campos.</h2>

      <form>
        <label htmlFor="pedido">
          <h3>NÚMERO DE PEDIDO (9 DÍGITOS - 00012345) *</h3>
        </label>
        <input
          type="text"
          id="pedido"
          name="pedido"
          maxLength="9"
          placeholder="Ingrese su número de pedido"
          required
        />

        <label htmlFor="correo">
          <h3>CORREO ELECTRÓNICO *</h3>
        </label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="Ingrese su correo electrónico"
          required
        />

        <div className="checkbox-container">
          <input type="checkbox" id="terminos" name="terminos" required />
          <label htmlFor="terminos">HE LEÍDO LOS TÉRMINOS Y CONDICIONES</label>
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="privacidad" name="privacidad" required />
          <label htmlFor="privacidad">
            DECLARO HABER LEÍDO LAS POLÍTICAS DE SEGURIDAD Y PRIVACIDAD Y AUTORIZO EL TRATAMIENTO DE MIS DATOS CONFORME A ELLA
          </label>
        </div>

        <button type="submit">CONTINUAR</button>
      </form>
    </div>
  );
};

export default Seguimiento;
