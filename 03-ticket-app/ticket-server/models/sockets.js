const TicketList = require("./ticket-list");

class Sockets {
	constructor(io) {
		this.io = io;

		// Crea la instancia de nuestro TicketList
		this.ticketList = new TicketList();

		this.socketEvents();
	}

	socketEvents() {
		// On connection
		this.io.on("connection", (socket) => {
			console.log("Conectado =)");

			socket.on("solicitar-ticket", (data, callback) => {
				const nuevoTicket = this.ticketList.crearTicket();
				callback(nuevoTicket);
			});
		});
	}
}

module.exports = Sockets;
