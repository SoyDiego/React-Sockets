import React from "react";
import useMapBox from "../hooks/useMapBox";

const puntoInicial = {
	lng: -122.4651,
	lat: 37.8001,
	zoom: 13,
};

const MapaPage = () => {
	const { setRef, coords, agregarMarcador } = useMapBox(puntoInicial);

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
