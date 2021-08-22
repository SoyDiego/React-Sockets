import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
	"pk.eyJ1Ijoic295ZGllZ28iLCJhIjoiY2sxcnJvZHJpMDE1bjNjbjNpMDR1N3RhbyJ9.YO91_GjInSSuSjzhlbPpGw";

const puntoInicial = {
	lng: -122.4651,
	lat: 37.8001,
	zoom: 13,
};

const MapaPage = () => {
	const mapaDiv = useRef();

	const [mapa, setMapa] = useState(null);
	const [coords, setCoords] = useState(puntoInicial);

	useEffect(() => {
		mapboxgl.accessToken =
			"pk.eyJ1Ijoic295ZGllZ28iLCJhIjoiY2tzbXpqdTJxMGpyZjJwcGUya3pyaXp0dyJ9.yos6WbJLiwjcfv5JCxCngg";
		const map = new mapboxgl.Map({
			container: mapaDiv.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [puntoInicial.lng, puntoInicial.lat],
			zoom: puntoInicial.zoom,
		});

		setMapa(map);
	}, []);

	// Cuando se mueve el mapa
	useEffect(() => {
		mapa?.on("move", () => {
			const { lng, lat } = mapa.getCenter();
			setCoords({
				lng: lng.toFixed(4),
				lat: lat.toFixed(4),
				zoom: mapa.getZoom().toFixed(2),
			});
		});
	}, [mapa]);

	return (
		<>
			<div className="info">
				lng: {coords.lng} | lat: {coords.lat} | zoom: {coords.zoom}
			</div>
			<div className="mapContainer" ref={mapaDiv} />
		</>
	);
};

export default MapaPage;
