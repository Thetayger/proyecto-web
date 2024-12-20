import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import carritoRoutes from './routes/carrito.js';
import juguetesRoutes from './routes/juguetes.js';

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.json({ result: 'OK' });
});

app.use('/carrito', carritoRoutes);
app.use('/juguetes', juguetesRoutes);

app.listen(3001, () => {
  console.log('Servidor iniciado. Escuchando en puerto 3001');
});


