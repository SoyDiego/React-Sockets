// io.on("connection", (socket) => {
// 	// socket.emit("mensaje-bienvenida", {
// 	// 	msg: "Bienvenido al server...",
// 	// 	fecha: new Date(),
// 	// });

// 	socket.on("mensaje-to-server", (data) => {
// 		io.emit("mensaje-from-server", data);
// 	});
// });

const Server = require("./models/server");

const server = new Server();

server.execute();
