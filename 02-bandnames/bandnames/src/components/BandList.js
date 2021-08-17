import React from "react";

const BandList = () => {
	const crearRows = () => {
		return (
			<tr>
				<td>
					<button name="" id="" class="btn btn-primary">
						+1
					</button>
				</td>
				<td>
					<input
						type="text"
						class="form-control"
						name=""
						id=""
						placeholder=""
					/>
				</td>
				<td>
					<h3>15</h3>
				</td>
				<td>
					<button name="" id="" class="btn btn-danger">
						Borrar
					</button>
				</td>
			</tr>
		);
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
