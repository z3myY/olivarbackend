const { Agricultor, Olivar } = require("./models.js");


// ------- AGRICULTORES

exports.readAgricultores = (req, res) =>
    Agricultor.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readAgricultor = (req, res) =>
    Agricultor.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteAgricultor = (req, res) =>
    Agricultor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateAgricultor = (req, res) =>
    Agricultor.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createAgricultor = (req, res) =>
    new Agricultor({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



// ------ OLIVARES

exports.readOlivares = (req, res) =>
    Olivar.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readOlivar = (req, res) =>
    Olivar.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteOlivar = (req, res) =>
    Olivar.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



exports.updateOlivar = (req, res) =>
    Olivar.findOneAndUpdate({ _id: req.params.id }, { $set: { variedad: req.body.variedad, hectareas: req.body.hectareas } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createOlivar = (req, res) =>
    new Olivar({ variedad: req.body.variedad, hectareas: req.body.hectareas })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });