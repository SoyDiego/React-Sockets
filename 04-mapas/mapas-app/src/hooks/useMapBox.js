import { useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
	"pk.eyJ1Ijoic295ZGllZ28iLCJhIjoiY2sxcnJvZHJpMDE1bjNjbjNpMDR1N3RhbyJ9.YO91_GjInSSuSjzhlbPpGw";

const useMapBox = (puntoInicial) => {
	// Referencia al div del mapa
	const mapaDiv = useRef();
	const setRef = useCallback((node) => {
		mapaDiv.current = node;
	}, []);

	const mapa = useRef();
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

		mapa.current = map;
	}, [puntoInicial]);

	// Cuando se mueve el mapa
	useEffect(() => {
		mapa.current.on("move", () => {
			const { lng, lat } = mapa.current.getCenter();
			setCoords({
				lng: lng.toFixed(4),
				lat: lat.toFixed(4),
				zoom: mapa.current.getZoom().toFixed(2),
			});
		});
	}, []);
	return {
		coords,
		setRef,
	};
};

export default useMapBox;
