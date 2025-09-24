import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, eliminarUsuario } from '../controllers/usuarios.controllers.js';
import { eliminarProducto } from '../controllers/productos.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener un cliente por su id
router.get('/usuarios/:id_usuarios', obtenerUsuario);

export default router;

// Eliminar un usuario por su ID
router.delete("/eliminarusuario/:id_usuario", eliminarUsuario);