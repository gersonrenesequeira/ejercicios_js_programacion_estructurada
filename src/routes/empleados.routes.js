import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado } from '../controllers/empleados.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener un cliente por su id
router.get('/empleados/:id_empleados', obtenerEmpleado);

export default router;