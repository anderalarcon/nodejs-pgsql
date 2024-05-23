const db = require('../config/db');

const getProducts = async () => {
    try {
        const client = await db.connect();
        const result = await client.query('SELECT * FROM product');
        return result.rows;
    } catch (error) {
        throw new Error('Error al obtener elementos: ' + error.message);
    }
};

const createProduct = async (nombre, descripcion) => {
    try {
        const client = await db.connect();
        const result = await client.query('INSERT INTO product(nombre, descripcion) VALUES($1, $2) RETURNING *', [nombre, descripcion]);
        return result.rows[0];
    } catch (error) {
        throw new Error('Error al crear elemento: ' + error.message);
    }
};

module.exports = {
    getProducts,
    createProduct
};