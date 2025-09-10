import { Router } from 'express';
import { obtenerDetallesCompras, obtenerDetallesCompra } from '../controllers/detalles_compras.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/detalles_compras', obtenerDetallesCompras);

// Ruta para obtener un cliente por su id
router.get('/detalles_compras/:id_detalle_compra', obtenerDetallesCompra);

export default router;