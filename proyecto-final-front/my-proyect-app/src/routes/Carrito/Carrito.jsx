import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Carrito.css';

const CarritoDeCompras = () => {
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();

  // Obtener los items del carrito desde el backend
  const fetchItemsCarrito = async () => {
    const response = await fetch('http://localhost:3001/carrito');
    const data = await response.json();
    setItemsCarrito(data.items); 
  };

  // Eliminar un item del carrito
  const removeItem = async (id) => {
    const response = await fetch(`http://localhost:3001/carrito/${id}`, {
      method: 'DELETE',
    });
  
    const data = await response.json();
    if (data.success) {
      setItemsCarrito(data.carrito.items);
      alert('Item eliminado del carrito!');
    } else {
      alert(data.message || 'Error al eliminar el producto.');
    }
  };

  // Redirigir a la página de pago con el total
  const handleCheckout = () => {
    navigate('/metodo-pago', { state: { subtotal } });
  };

  // Cargar los items cuando el componente se monta
  const onLoad = async () => {
    fetchItemsCarrito();
  };

  // Calcular el subtotal
  useEffect(() => {
    let total = 0;
    itemsCarrito.forEach((item) => {
      total += item.precio * item.cantidad;
    });
    setSubtotal(total);
  }, [itemsCarrito]);

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <div className="carrito-detalle-container">
        <h2>Carrito de Compras</h2>
        <table className="carrito-detalle-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {itemsCarrito.map((item) => (
              <tr key={item.id}>
                <td>{item.titulo}</td>
                <td>${item.precio}</td>
                <td>{item.cantidad}</td>
                <td>${item.precio * item.cantidad}</td>
                <td>
                  <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div id="total">
          <span>Total: ${subtotal}</span>
        </div>

        <button className="comprar-btn" onClick={handleCheckout}>Comprar</button>
        <button className="seguir-comprando-btn" onClick={() => window.location.href = '/'}>Seguir Comprando</button>
      </div>
    </>
  );
};

export default CarritoDeCompras;

