import React, { useState } from "react";
//create your first component

export function Home() {
	const [encendido, setEncendido] = useState("");

	return (
		<div className="container d-flex flex-column justify-content-start align-items-center">
			<div className="base-sem"></div>
			<div className="container d-flex flex-column justify-content-around align-items-center semaforo">
				<button
					className={
						"rounded-circle red " +
						(encendido === "rojo" ? "selected" : "")
					}
					onClick={() => setEncendido("rojo")}></button>
				<button
					className={
						"rounded-circle yellow " +
						(encendido === "amarillo" ? "selected" : "")
					}
					onClick={() => setEncendido("amarillo")}></button>
				<button
					className={
						"rounded-circle green " +
						(encendido === "verde" ? "selected" : "")
					}
					onClick={() => setEncendido("verde")}></button>
			</div>
		</div>
	);
}
