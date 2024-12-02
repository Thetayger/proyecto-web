import express from 'express';
import controller from '../controllers/carrito.js';

const routes = express.Router();

// Obtener todos los productos en el carrito
routes.get('/', controller.findAll);

// Agregar un nuevo producto al carrito
routes.post('/item', controller.addItem);

// Eliminar un producto por id
routes.delete('/:id', controller.remove);

// Vaciar el carrito
routes.delete('/', controller.removeAll);


export default routes;
