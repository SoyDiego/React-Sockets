//Servidor de Express
const express = require("express");
const app = express();

//Servidor de Sockets
const server = require("http").createServer(app);

//Configuración del Socket server
const io = require("socket.io")(server);

//Desplegar el directorio público
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
	// socket.emit("mensaje-bienvenida", {
	// 	msg: "Bienvenido al server...",
	// 	fecha: new Date(),
	// });

	socket.on("mensaje-to-server", (data) => {
		io.emit("mensaje-from-server", data);
	});
});
server.listen(8080, () => {
	console.log("Server corriendo en puerto 8080");
});
