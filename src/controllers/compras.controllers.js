import { pool } from '../../db_conection.js';

// Obtener todas las compras
export const obtenerCompras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM compras');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un cliente por su ID
export const obtenerCompra = async (req, res) => {
    try {
        const id_compra = req.params.id_compra;
        const [result] = await pool.query('SELECT * FROM Compras WHERE id_compra= ? ', [id_compra]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_compra} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los compra.'
        });
    }
};

// Registrar una nueva Categoría
export const registrarCompra= async (req, res) => {
    try {
        const {
        id_empleado,
        fecha_compra,
        total_compra
            
        } = req.body;

        const [result] = await pool.query(
            'INSERT INTO compras (id_empleado, fecha_compra, total_compra) VALUES (?, ?, ?)',
            [
                id_empleado,
                fecha_compra,
                total_compra
            ]
        );

        res.status(201).json({ id_compra: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar la compra.',
            error: error
        });
    }
};

// eliminarcliente.js

export const eliminarCompras = async (req, res) => {
  try {
    const id_venta = req.params.id_compra;
    const [result] = await pool.query(
      "DELETE FROM compra WHERE id_cliente = ?",
       [id_compra]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `No se encontró la compra con ese ID ${req.params.id}`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al eliminar compra",
      error: error,
    });
  }
};