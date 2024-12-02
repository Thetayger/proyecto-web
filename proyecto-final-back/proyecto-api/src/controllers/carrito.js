import repository from "../repository/carrito.js";

const findAll = (req, res) => {
  const carrito = repository.findAll();
  return res.status(200).json(carrito);
};

const addItem = (req, res) => {
  const item = req.body;
  const itemAdded = repository.addItem(item);
  return res.status(201).json(itemAdded);
};

const remove = (req, res) => {
  const id = req.params.id;
  const result = repository.remove(id);
  if (result) {
    const updatedCarrito = repository.findAll(); // Devuelve el carrito actualizado
    return res.status(200).json({ success: true, carrito: updatedCarrito });
  } else {
    return res.status(404).json({ success: false, message: 'Item no encontrado' });
  }
};

const removeAll = (req, res) => {
  const resp = repository.removeAll();
  return res.status(200).json({ success: resp });
};

const controller = { findAll, addItem, remove, removeAll };

export default controller;
