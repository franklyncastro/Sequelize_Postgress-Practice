const { Router } = require("express");
const router = Router();
const { getUsers, createUsers, deleteUser, getUser } = require("../controllers/Users.contollers");
const {getCiudad, createCiudad, deleteCiudad} = require('../controllers/Ciudades.controllers')

router.get("/users", getUsers);
router.post("/users", createUsers);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", getUser);


router.get('/ciudades', getCiudad)
router.post('/ciudades', createCiudad)
router.delete('/ciudades/:id', deleteCiudad)

module.exports = router;

