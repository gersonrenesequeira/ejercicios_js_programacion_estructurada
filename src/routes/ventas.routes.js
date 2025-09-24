import { Router } from "express";
import { obtenerVentas, obtenerVenta, eliminarVenta } from "../controllers/ventas.controllers.js";

const router = Router();

// Obtener todas las ventas
router.get("/ventas", obtenerVentas);

// Obtener una venta por su ID
router.get("/ventas/:id_venta", obtenerVenta);

// Eliminar una venta por su ID
router.delete("/eliminarventa/:id_venta", eliminarVenta);

export default router;
