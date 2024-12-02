// controllers/juguetes.js
import repository from '../repository/juguetes.js';

const getJuguetes = (req, res) => {
  const productosJuguetes = repository.findAll();
  return res.status(200).json(productosJuguetes);  // Devuelve los productos de la categoría 'Juguetes'
};

const controller = { getJuguetes };

export default controller;
