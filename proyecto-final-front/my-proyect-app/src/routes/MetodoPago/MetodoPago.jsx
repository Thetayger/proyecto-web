import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MetodoPago.css";

const MetodoPago = () => {
  const [showShipping, setShowShipping] = useState(false);
  const location = useLocation();
  const { subtotal } = location.state || { subtotal: 0 }; // Capturar el total pasado

  const processPayment = () => {
    alert("¡Pago Exitoso!");
    setShowShipping(true);
  };

  return (
    <div className="metodo-pago-container">
      {!showShipping ? (
        <div className="metodo-pago-section">
          <h2 className="metodo-pago-title">Método de Pago</h2>
          <p className="metodo-pago-total">Total a pagar: ${subtotal}</p>
          <form className="metodo-pago-form">
            {/* Campos del formulario */}
            <button
              type="button"
              className="metodo-pago-button"
              onClick={processPayment}
            >
              Realizar Pago
            </button>
          </form>
        </div>
      ) : (
        <div className="metodo-envio-section">
          <h2 className="metodo-envio-title">Datos de Envío</h2>
          <form className="metodo-envio-form">
            {/* Campos de envío */}
            <button type="submit" className="metodo-envio-button">
              Confirmar Envío
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MetodoPago;
