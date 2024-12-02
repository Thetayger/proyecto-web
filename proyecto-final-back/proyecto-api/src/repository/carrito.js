import model from '../models/carrito.js';

let carrito = { ...model };

// Obtener todos los items del carrito
const findAll = () => {
  return carrito;
};

// Agregar un nuevo item al carrito
const addItem = (item) => {
  carrito.items.push(item);
  return item;
};

// Eliminar un item por id
const remove = (id) => {
  const index = carrito.items.findIndex(item => item.id == id);

  if (index > -1) {
    carrito.items.splice(index, 1);
    return true;
  } else {
    console.error(`Item con ID ${id} no encontrado en el carrito.`);
    return false;
  }
};

// Eliminar todos los items
const removeAll = () => {
  carrito.items = [];
  return true;
};

const repository = { findAll, addItem, remove, removeAll };

export default repository;
