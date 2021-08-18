import React, { useState } from "react";

const BandAdd = ({ crearBanda }) => {
	const [valor, setValor] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (valor.trim().length > 0) {
			crearBanda(valor);
		}
		setValor("");
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
