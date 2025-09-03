import { Router } from 'express';
import { obtenerCompras } from '../controllers/compras.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/compras', obtenerCompras);

export default router;