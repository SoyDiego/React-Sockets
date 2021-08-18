import React, { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

const BandAdd = () => {
	const [valor, setValor] = useState("");
	const { socket } = useContext(SocketContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (valor.trim().length > 0) {
			socket.emit("nueva-banda", valor);
			setValor("");
		}
	};

	return (
		<>
			<h3>Agregar Banda</h3>
			<form onSubmit={handleSubmit}>
				<input
					className="form-control"
					type="text"
					value={valor}
					onChange={(e) => setValor(e.target.value)}
					placeholder="Nuevo nombre"
				/>
			</form>
		</>
	);
};

export default BandAdd;
