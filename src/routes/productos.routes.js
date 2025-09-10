import { Router } from 'express';
import { obtenerProductos, obtenerProducto } from '../controllers/productos.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/productos', obtenerProductos);

// Ruta para obtener un cliente por su id
router.get('/productos/:id_productos', obtenerProducto);

export default router;