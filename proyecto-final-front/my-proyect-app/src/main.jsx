import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LoginPage from './routes/LoginPage/LoginPage.jsx'
import RegisterPage from './routes/RegisterPage/RegisterPage.jsx';
import Juguetes from './routes/Juguetes/Juguetes.jsx';
import Televisores from './routes/Televisores/Televisores.jsx';
import ZonaColeccionista from './routes/ZonaColeccionista/ZonaColeccionista.jsx'
import Impresoras from './routes/Impresoras/Impresoras.jsx';
import ElectroHogar from './routes/Electrohogar/ElectroHogar.jsx';
import Laptops from './routes/Laptops/Laptops.jsx';
import Arte from './routes/Arte/Arte.jsx';
import Tabletas from './routes/Tabletas/Tabletas.jsx';
import Cocina from './routes/Cocina/Cocina.jsx';
import VentasCorporativas from './routes/VentasCoporativas/VentasCorporativas.jsx';
import NuestrasTiendas from './routes/NuestrasTiendas/NuestrasTiendas.jsx';
import TopOfertas from './routes/TopOfertas/TopOfertas.jsx';
import Seguimiento from './routes/Seguimiento/Seguimiento.jsx';
import Carrito from './routes/Carrito/Carrito.jsx';
import MetodoPago from './routes/MetodoPago/MetodoPago.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/juguetes",
    element: <Juguetes />
  },
  {
    path: "/televisores",
    element: <Televisores />
  },
  {
    path: "/zona-coleccionista",
    element: <ZonaColeccionista />
  },
  {
    path: "/impresoras",
    element: <Impresoras />
  },
  {
    path: "/electro-hogar",
    element: <ElectroHogar />
  },
  {
    path: "/laptops",
    element: <Laptops />
  },
  {
    path: "/arte",
    element: <Arte />
  },
  {
    path: "/tabletas",
    element: <Tabletas />
  },
  {
    path: "/cocina",
    element: <Cocina />
  },
  {
    path: "/ventas-corporativas",
    element: <VentasCorporativas />
  },
  {
    path: "/nuestras-tiendas",
    element: <NuestrasTiendas />
  },
  {
    path: "/top-ofertas",
    element: <TopOfertas />
  },
  {
    path: "/seguimiento",
    element: <Seguimiento />
  },
  {
    path: "/carrito",
    element: <Carrito />
  },
  {
    path: "/metodo-pago",
    element: <MetodoPago />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
