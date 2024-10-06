const express = require('express');
const dotenv = require('dotenv').config();
const { dbConnection } = require('./database/config')
const cors = require('cors');

//Crear el servidor de express
const app = express();
dbConnection();

//CORS
app.use(cors())

//Directorio publico
app.use( express.static('public') );

app.use (express.json());

//Rutas
// TODO: AUTH 
app.use('/api/auth', require('./routes/auth') );




// Escuchar peticiones
app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});

