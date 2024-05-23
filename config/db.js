const { Pool } = require('pg');

// Configuración de conexión a PostgreSQL
const pool = new Pool({
    user: 'user',        // Nombre de usuario de PostgreSQL
    host: 'localhost',       // Host de PostgreSQL
    database: 'database', // Nombre de la base de datos
    password: 'password',    // Contraseña de PostgreSQL
    port: 5432               // Puerto de PostgreSQL
});

// Singleton para garantizar una única instancia del pool de conexiones
let instance;

async function connect() {
    if (!instance) {
        instance = await pool.connect();
        console.log('Conectando por primera vez a PostgreSQL');
    }
    console.log("Ya existe una conexión a PostgreSQL");
    return instance;
}

module.exports = {
    connect
};
