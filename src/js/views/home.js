import React from "react";
import Card from "./card.js";
import Characters from "../component/characters-container.js";
import Planets from "../component/planets-container.js";
import Vehicles from "../component/vehicle-container.js";
import "../../styles/home.css";

const Home = () => {

	return (
		<main className="container">

			<section>
				<h1>Characters</h1>
				<Characters />
			</section>

			<section>
				<h1>Planets</h1>
				<Planets />
			</section>

			<section>
				<h1>Vehicles</h1>
				<Vehicles />
			</section>

		</main >
	)
};

export default Home;