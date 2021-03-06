//Servidor de Express
const express = require("express");
//Servidor de Sockets
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");
const Sockets = require("./sockets");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		//HTTP SERVER
		this.server = http.createServer(this.app);

		//CONFIGURACION DE SOCKETS
		this.io = socketio(this.server, {
			/* Configuración */
		});
	}

	middlewares() {
		//Desplegar el directorio público
		this.app.use(express.static(path.resolve(__dirname, "../public")));

		//CORS
		this.app.use(cors());
	}

	configurarSockets() {
		new Sockets(this.io);
	}

	execute() {
		//Inicializar middlewares
		this.middlewares();

		//Inicializar sockets
		this.configurarSockets();

		//Inicializar el server
		this.server.listen(this.port, () => {
			console.log("Server corriendo en puerto:", this.port);
		});
	}
}

module.exports = Server;
