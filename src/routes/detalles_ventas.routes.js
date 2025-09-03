import { Router } from 'express';
import { obtenerDetallesVenta} from '../controllers/detalles_ventas.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/detalles_ventas', obtenerDetallesVenta);

export default router;