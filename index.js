const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const getDbInstance = require('./config/db');
const mainRoutes = require('./routes/main');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON en las solicitudes
app.use(bodyParser.json());

// Middleware para habilitar CORS (puedes ajustarlo según tus necesidades específicas)
app.use(cors());

// Rutas principales
app.use('/api', mainRoutes);

// Middleware para manejar errores para rutas no encontradas
app.use((req, res, next) => {
    const error = new Error('Ruta no encontrada');
    error.status = 404;
    next(error);
});

// Middleware para manejar errores generales
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// Iniciar el servidor después de conectar a la base de datos
getDbInstance.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Error al conectar a la base de datos:', err);
});
