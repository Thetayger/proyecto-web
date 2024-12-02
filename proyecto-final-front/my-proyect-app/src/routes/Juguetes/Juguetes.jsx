import './Juguetes.css';
import { useEffect, useState } from 'react';

const Juguetes = () => {
  const [productos, setProductos] = useState([]);
  const [cantidad, setCantidad] = useState({});

  const fetchProductos = async () => {
    const response = await fetch('http://localhost:3001/juguetes');
    const data = await response.json();
    setProductos(data);
  };

  const handleCantidadChange = (id, value) => {
    setCantidad(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const agregarAlCarrito = async (producto) => {
    const cantidadProducto = cantidad[producto.id] || 1;
    await fetch('http://localhost:3001/carrito/item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...producto,
        cantidad: cantidadProducto, 
      }),
    });
    alert('Producto agregado al carrito');
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <div className="juguetes-container">
      <h1 className="juguetes-title">Juguetes</h1>
      <div className="productos-list">
        {productos?.map((producto) => (
          <div key={producto.id} className="producto-item">
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="producto-imagen"
            />
            <h2 className="producto-titulo">{producto.titulo}</h2>
            <p className="producto-descripcion">{producto.descripcion}</p>
            <span className="producto-precio">${producto.precio}</span>
            <div className="cantidad-selector">
              <label htmlFor={`cantidad-${producto.id}`}>Cantidad:</label>
              <input
                type="number"
                id={`cantidad-${producto.id}`}
                name={`cantidad-${producto.id}`}
                value={cantidad[producto.id] || 1} // Valor inicial 1 si no hay cantidad seleccionada
                min="1"
                onChange={(e) => handleCantidadChange(producto.id, parseInt(e.target.value))}
              />
            </div>
            <button
              className="agregar-carrito-btn"
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Juguetes;

