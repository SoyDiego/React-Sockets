import React from "react";

const getUltimos = async () => {
	const resp = await fetch("http://localhost:8080/ultimos");
	const data = await resp.json();

    return data.ultimos
};

export default getUltimos;
