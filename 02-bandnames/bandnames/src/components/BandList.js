import React, { useEffect, useState } from "react";

const BandList = ({ data, votar, borrar, cambiarNombre }) => {
	const [bands, setBands] = useState(data);

	useEffect(() => {
		setBands(data);
	}, [data]);

	const cambioNombre = (e, id) => {
		const nuevoNombre = e.target.value;
		setBands((bands) =>
			bands.map((band) => {
				if (band.id === id) {
					band.name = nuevoNombre;
				}
				return band;
			})
		);
	};

	const onBlur = (id, nombre) => {
		cambiarNombre(id, nombre);
	};

	const crearRows = () => {
		return bands.map((band) => (
			<tr key={band.id}>
				<td>
					<button
						onClick={() => votar(band.id)}
						className="btn btn-primary">
						+1
					</button>
				</td>
				<td>
					<input
						type="text"
						className="form-control"
						value={band.name}
						onChange={(e) => cambioNombre(e, band.id)}
						onBlur={() => onBlur(band.id, band.name)}
					/>
				</td>
				<td>
					<h3>{band.votes}</h3>
				</td>
				<td>
					<button
						onClick={() => borrar(band.id)}
						className="btn btn-danger">
						Borrar
					</button>
				</td>
			</tr>
		));
	};

	return (
		<>
			<table className="table table-striped">
				<thead>
					<tr>
						<th></th>
						<th>Nombre</th>
						<th>Votos</th>
						<th>Borrar</th>
					</tr>
				</thead>
				<tbody>{crearRows()}</tbody>
			</table>
		</>
	);
};

export default BandList;
