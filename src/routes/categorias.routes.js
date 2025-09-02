import { Router } from 'express';
import { obtenerCategorias } from '../controllers/categotia.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/categorias', obtenerCategorias);

export default router;