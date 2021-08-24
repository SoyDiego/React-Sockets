import React, { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";
import useMapBox from "../hooks/useMapBox";

const puntoInicial = {
	lng: -122.4651,
	lat: 37.8001,
	zoom: 13,
};

const MapaPage = () => {
	const { setRef, coords, nuevoMarcador$, movimientoMarcador$ } =
		useMapBox(puntoInicial);

	const { socket } = useContext(SocketContext);

	// Nuevo marcador
	useEffect(() => {
		nuevoMarcador$.subscribe((marcador) => {
			socket.emit("marcador-nuevo", marcador);
		});
	}, [nuevoMarcador$, socket]);

	// Movimiento marcador
	useEffect(() => {
		movimientoMarcador$.subscribe((marcador) => {
			// TODO emitir movimiento marcador
			console.log(marcador);
		});
	}, [movimientoMarcador$]);

	// Escuchar nuevos marcadores
	useEffect(() => {
		socket.on("marcador-nuevo", (marcador) => {
			console.log(marcador);
		});
	}, [socket]);

	return (
		<>
			<div className="info">
				lng: {coords.lng} | lat: {coords.lat} | zoom: {coords.zoom}
			</div>
			<div className="mapContainer" ref={setRef} />
		</>
	);
};

export default MapaPage;
