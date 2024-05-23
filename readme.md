# Proyecto Node.js con PostgreSQL

Este proyecto muestra cómo configurar una aplicación Node.js para conectarse y realizar operaciones básicas con una base de datos PostgreSQL. La aplicación utiliza Express como framework web y pg (node-postgres) como cliente de base de datos para PostgreSQL.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js y npm (Node Package Manager): Puedes descargarlos e instalarlos desde [nodejs.org](https://nodejs.org/).
- PostgreSQL: Puedes descargar e instalar PostgreSQL desde [postgresql.org](https://www.postgresql.org/).

## Configuración del proyecto

1. **Clonar el repositorio**

   Clona este repositorio en tu máquina local usando Git

```
git clone ....
```

2. **Instalar dependencias**

```
npm install
```

Navega hasta el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

## Node version

18.20.2

## Correr el servidor

```
npm run dev
```

## Configuración de la base de datos

1. **Crear una base de datos**

Abre tu cliente de PostgreSQL (por ejemplo, pgAdmin o psql) y crea una nueva base de datos:

```sql
CREATE DATABASE nombre_de_tu_base_de_datos;
```

## Credenciales

```
Cambia tus credenciales en el archivo db.js
```

```javascript

const pool = new Pool({
user: 'user', // Nombre de usuario de PostgreSQL
host: 'localhost', // Host de PostgreSQL
database: 'database', // Nombre de la base de datos
password: 'password', // Contraseña de PostgreSQL
port: 5432 // Puerto de PostgreSQL
});

module.exports = pool;
```