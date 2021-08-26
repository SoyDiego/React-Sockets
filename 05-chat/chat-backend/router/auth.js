// Path: api/login

const { Router } = require("express");
const { check } = require("express-validator");
const { crearUsuario, login, renewToken } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const validarJWT = require("../middlewares/validar-jwt");

// Controladores

const router = Router();

// Crear nuevos usuarios
router.post(
	"/new",
	[
		check("nombre", "El nombre es obligatorio").not().isEmpty(),
		check("password", "El password es obligatorio").not().isEmpty(),
		check("email", "El email es obligatorio").isEmail(),
		validarCampos,
	],
	crearUsuario
);

// LOGIN
router.post(
	"/",
	[
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password es obligatorio").not().isEmpty(),
		validarCampos,
	],
	login
);

// REVALIDAR TOKEN
router.get("/renew", validarJWT, renewToken);

module.exports = router;
