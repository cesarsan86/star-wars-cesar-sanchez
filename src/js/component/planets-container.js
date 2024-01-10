import React, { useState, useEffect, useContext } from "react";
import Card from "../views/card.js";
import { Context } from "../store/appContext.js";
import "../../styles/cardContainer.css";

const Planets = () => {

    const contexto = useContext(Context);

    const [planets, setPlanets] = useState([]);

    //Funcion para solicitar data de personajes a la API
    function solicitarData() {
        fetch("https://swapi.tech/api/planets")
        .then(response => response.json())
        .then(data => setPlanets(data.results))
        .catch(error => console.log(error));
    }
    


    useEffect(() => {
        solicitarData();
    }, [])

    return (
        <div className="contenedor-cards">
            {
                planets.map((value, index) => (
                    <Card nombre={value.name} key={index} id={value.uid} type={"planets"} />
                ))
            }
        </div>
    )
}

export default Planets;