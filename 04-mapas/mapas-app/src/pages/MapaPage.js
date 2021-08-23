import React, { useEffect } from "react";
import useMapBox from "../hooks/useMapBox";

const puntoInicial = {
	lng: -122.4651,
	lat: 37.8001,
	zoom: 13,
};

const MapaPage = () => {
	const {
		setRef,
		coords,
		nuevoMarcador$,
		movimientoMarcador$,
	} = useMapBox(puntoInicial);

	// Nuevo marcador
	useEffect(() => {
		nuevoMarcador$.subscribe((marcador) => {
			// TODO emitir nuevo marcador
		});
	}, [nuevoMarcador$]);

	// Movimiento marcador
	useEffect(() => {
		movimientoMarcador$.subscribe((marcador) => {
			// TODO emitir movimiento marcador
			console.log(marcador);
		});
	}, [movimientoMarcador$]);

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
