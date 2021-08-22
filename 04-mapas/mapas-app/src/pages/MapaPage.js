import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
	"pk.eyJ1Ijoic295ZGllZ28iLCJhIjoiY2sxcnJvZHJpMDE1bjNjbjNpMDR1N3RhbyJ9.YO91_GjInSSuSjzhlbPpGw";

const puntoInicial = {
	lng: 5,
	lat: 34,
	zoom: 2,
};

const MapaPage = () => {
	const mapaDiv = useRef();

	const [, setMapa] = useState(null);

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

	return (
		<>
			<div className="mapContainer" ref={mapaDiv} />
		</>
	);
};

export default MapaPage;
