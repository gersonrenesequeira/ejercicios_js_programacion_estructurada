import { Router } from 'express';
import { obtenerDetallesCompras } from '../controllers/detalles_compras.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/detalles_compras', obtenerDetallesCompras);

export default router;