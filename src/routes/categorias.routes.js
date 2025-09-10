import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria } from '../controllers/categorias.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/categorias', obtenerCategorias);

// Ruta para obtener una categoria por su id
router.get('/categoria/:id_categoria', obtenerCategoria);

// Ruta para registrar una nueva categoria
router.get('/registrarcategoria', registrarCategoria);

export default router;