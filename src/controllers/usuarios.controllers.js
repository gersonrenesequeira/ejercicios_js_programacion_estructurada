import { pool } from '../../db_conection.js';

// Obtener todas las Usuario
export const obtenerUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM usuarios');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un cliente por su ID
export const obtenerUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const [result] = await pool.query('SELECT * FROM Usuarios WHERE id_usuario= ? ', [id_usuario]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_usuario} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los empleados.'
        });
    }
};