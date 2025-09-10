import { pool } from '../../db_conection.js';

// Obtener todas las empleados
export const obtenerEmpleados = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM empleados');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un cliente por su ID
export const obtenerEmpleado = async (req, res) => {
    try {
        const id_empleados = req.params.id_empleados;
        const [result] = await pool.query('SELECT * FROM Empleados WHERE id_empleados= ? ', [id_empleados]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_empleados} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los empleados.'
        });
    }
};
