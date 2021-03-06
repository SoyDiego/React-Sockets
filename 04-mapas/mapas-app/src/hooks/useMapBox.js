import { useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { v4 } from "uuid";
import { Subject } from "rxjs";

mapboxgl.accessToken =
	"pk.eyJ1Ijoic295ZGllZ28iLCJhIjoiY2sxcnJvZHJpMDE1bjNjbjNpMDR1N3RhbyJ9.YO91_GjInSSuSjzhlbPpGw";

const useMapBox = (puntoInicial) => {
	// Referencia al div del mapa
	const mapaDiv = useRef();
	const setRef = useCallback((node) => {
		mapaDiv.current = node;
	}, []);

	// Referencia a los marcadores
	const marcadores = useRef({});

	// Observables del RXJS
	const movimientoMarcador = useRef(new Subject());
	const nuevoMarcador = useRef(new Subject());

	// Mapa y coords
	const mapa = useRef();
	const [coords, setCoords] = useState(puntoInicial);

	// Funcion para agregar marcadores
	const agregarMarcador = useCallback((e, id) => {
		const { lng, lat } = e.lngLat || e;
		const marker = new mapboxgl.Marker();

		marker.id = id || v4();
		marker.setLngLat([lng, lat]).addTo(mapa.current).setDraggable(true);

		marcadores.current[marker.id] = marker;

		if (!id) {
			nuevoMarcador.current.next({
				id: marker.id,
				lng,
				lat,
			});
		}

		// Escuchar movimientos del marcador
		marker.on("drag", ({ target }) => {
			const { id } = target;
			const { lng, lat } = target.getLngLat();

			movimientoMarcador.current.next({
				id,
				lng,
				lat,
			});
		});
	}, []);

	// Funcion para actualizar la ubicación del marcador
	const actualizarPosicion = useCallback(({ id, lng, lat }) => {
		marcadores.current[id].setLngLat([lng, lat]);
	}, []);

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

	// Agregar marcadores cuando hago click
	useEffect(() => {
		mapa.current.on("click", (e) => {
			agregarMarcador(e);
		});
	}, [agregarMarcador]);

	return {
		agregarMarcador,
		actualizarPosicion,
		coords,
		marcadores,
		setRef,
		nuevoMarcador$: nuevoMarcador.current,
		movimientoMarcador$: movimientoMarcador.current,
	};
};

export default useMapBox;
