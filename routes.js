const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/agricultores",      cors(), controller.readClientes);   // Read All
router.get    ("/agricultores/:id",  cors(), controller.readCliente);    // Read
router.delete ("/agricultores/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/agricultores/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/agricultores",      cors(), controller.createCliente);  // Create

router.get    ("/olivares",     cors(), controller.readArticulos);  // Read All
router.get    ("/olivares/:id", cors(), controller.readArticulo);   // Read
router.delete ("/olivares/:id", cors(), controller.deleteArticulo); // Delete
router.put    ("/olivares/:id", cors(), controller.updateArticulo); // Update
router.post   ("/olivares",     cors(), controller.createArticulo); // Create


module.exports = router;