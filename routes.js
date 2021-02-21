const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get("/agricultores", cors(), controller.readAgricultores); // Read All
router.get("/agricultores/:id", cors(), controller.readAgricultor); // Read
router.delete("/agricultores/:id", cors(), controller.deleteAgricultor); // Delete
router.put("/agricultores/:id", cors(), controller.updateAgricultor); // Update
router.post("/agricultores", cors(), controller.createAgricultor); // Create

router.get("/olivares", cors(), controller.readOlivares); // Read All
router.get("/olivares/:id", cors(), controller.readOlivar); // Read
router.delete("/olivares/:id", cors(), controller.deleteOlivar); // Delete
router.put("/olivares/:id", cors(), controller.updateOlivar); // Update
router.post("/olivares", cors(), controller.createOlivar); // Create


module.exports = router;