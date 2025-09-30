import { Router } from 'express';
import { 
  obtenerCategorias, 
  obtenerCategoria, 
  registrarCategoria, 
  actualizarCategoria, 
  eliminarCategoria 
} from '../controllers/categorias.controllers.js';

const router = Router();

// Ruta para obtener todas las categorías
router.get('/categorias', obtenerCategorias);

// Ruta para obtener una categoría por su ID
router.get('/categoria/:id_categoria', obtenerCategoria);

// Ruta para registrar una nueva categoría
router.post('/registrarcategoria', registrarCategoria);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);


// Ruta para actualizar una categoría por su ID
router.put('/actualizarcategoria/:id_categoria', actualizarCategoria);


export default router;