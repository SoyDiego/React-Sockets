//Servidor de Express
const express = require("express");
//Servidor de Sockets
const http = require("http");
const socketio = require("socket.io");
const path = require("path");

class Server {
	constructor() {
		this.app = express();
		this.port = 8080;

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
	}

	configurarSockets() {
		// ???
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
