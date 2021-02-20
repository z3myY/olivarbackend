const express = require('express');
const app = express();
const PORT   = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

// Para hacer nuestra app pública
const cors = require('cors');

app.use(cors());

// MIDDLEWARE
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname , 'public')));   

// SERVIDOR WEB
app.listen(3000, () => console.log("Servidor iniciado..."));

// Servidor web

require('dotenv').config();


// CONEXIÓN A BASE DE DATOS
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Conexión a BD correcta"))
    .catch(error => console.log("Error al conectarse a la BD" + error));
	
// Archivo de rutas
app.use('/api', apiRoutes);