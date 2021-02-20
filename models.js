const mongoose = require('mongoose');

const Agricultor = mongoose.model('Agricultor',
    new mongoose.Schema({ nombre: String, apellidos: String })
);

const Olivar = mongoose.model('Olivar',
    new mongoose.Schema({ variedad: String, hectareas: Number })
);

module.exports = {
    Agricultor: Agricultor,
    Olivar: Olivar
}

// Otra forma más corta:
// module.exports = {
//     Agricultor,
//     Olivar
// }