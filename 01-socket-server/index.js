//Servidor de Express
const app = require("express")();

//Servidor de Sockets
const server = require("http").createServer(app);

//Configuración del Socket server
const io = require("socket.io")(server);
io.on("connection", () => {
	/* … */
});
server.listen(8080, () =>{
    console.log('Server corriendo en puerto 8080');
});
