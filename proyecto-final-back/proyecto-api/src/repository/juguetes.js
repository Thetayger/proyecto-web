// repository/juguetes.js
import juguetes from '../models/juguetes.js';

const findAll = () => {
  return juguetes.productos;  // Devuelve los productos de la categoría 'Juguetes'
};

const repository = { findAll };

export default repository;
