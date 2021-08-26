const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");
const generarJWT = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
	try {
		const { email, password } = req.body;

		// Verifica que el email no exista en la BD
		const existeEmail = await Usuario.findOne({ email });

		if (existeEmail) {
			return res.status(400).json({
				ok: false,
				msg: "El correo ya existe en la BD",
			});
		}

		const usuario = new Usuario(req.body);

		// Encriptar contraseña
		const salt = bcrypt.genSaltSync();
		usuario.password = bcrypt.hashSync(password, salt);

		// Guardar usuario BD
		await usuario.save();

		//Generar JSONWebToken
		const token = await generarJWT(usuario.id);

		res.json({
			usuario,
			token
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Hable con el administrador",
		});
	}
};

const login = async (req, res = response) => {
	const { email, password } = req.body;

	res.json({
		ok: true,
		msg: "login",
		email,
		password,
	});
};

const renewToken = async (req, res = response) => {
	res.json({
		ok: true,
		msg: "renew",
	});
};
module.exports = { crearUsuario, login, renewToken };
