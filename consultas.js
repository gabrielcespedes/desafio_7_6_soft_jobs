const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Bgabriel441685',
    database: 'softjobs',
    allowExitOnIdle: true
});

const agregarUsuario = async(email, password, rol, lenguage) => {
    const consulta = 'INSERT INTO usuarios (EMAIL, PASSWORD, ROL, LENGUAGE) VALUES ($1, $2, $3, $4)';
    const values = [email, password, rol, lenguage];
    const { rowCount } = await pool.query(consulta, values);
    if (!rowCount) throw { code: 404, message: 'No se registró usuario' };
    const result = {email, password, rol, lenguage};
    return result;
} 

module.exports = {agregarUsuario};