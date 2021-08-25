// Path: api/login

const { Router } = require("express");
const { crearUsuario, login, renewToken } = require("../controllers/auth");

// Controladores

const router = Router();

// Crear nuevos usuarios
router.post("/new", crearUsuario);

// LOGIN
router.post("/", login);

// REVALIDAR TOKEN
router.get("/renew", renewToken);

module.exports = router;
