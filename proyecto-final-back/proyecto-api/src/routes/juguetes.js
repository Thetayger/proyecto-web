// routes/juguetes.js
import express from 'express';
import controller from '../controllers/juguetes.js';

const router = express.Router();

router.get('/', controller.getJuguetes);  // Ruta para obtener los productos de 'Juguetes'

export default router;
