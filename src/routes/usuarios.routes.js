import { Router } from 'express';
import { obtenerUsuarios } from '../controllers/usuarios.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/usuarios', obtenerUsuarios);

export default router;