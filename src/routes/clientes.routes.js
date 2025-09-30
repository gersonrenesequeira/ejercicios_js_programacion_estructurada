import { Router } from 'express';
import {
  obtenerClientes,
  obtenerCliente,
  registrarCliente,
  eliminarcliente,
  actualizarClientePatch
} from '../controllers/clientes.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/clientes', obtenerClientes);

// Ruta para obtener un cliente por su ID
router.get('/clientes/:id_cliente', obtenerCliente);

// Ruta para registrar un nuevo cliente
router.post('/clientes', registrarCliente);

// Ruta para actualizar parcialmente un cliente por su ID
router.patch('/clientes/:id_cliente', actualizarClientePatch);

// Ruta para eliminar un cliente por su ID
router.delete('/clientes/:id_cliente', eliminarcliente);

export default router;
