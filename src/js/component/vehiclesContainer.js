import React, { useState, useEffect, useContext } from "react";
import Card from "../views/card.js";
import { Context } from "../store/appContext.js";
import "../../styles/cardContainer.css";

const Vehicles = () => {

    const contexto = useContext(Context);

    const [vehicles, setVehicles] = useState([]);

    //Funcion para solicitar data de personajes a la API
    function solicitarData() {
        fetch("https://swapi.tech/api/vehicles/")
        .then(response => response.json())
        .then(data => setVehicles(data.results))
        .catch(error => console.log(error));
    }
    


    useEffect(() => {
        solicitarData();
    }, [])

    return (
        <div className="contenedor-cards">
            {
                vehicles.map((value, index) => (
                    <Card nombre={value.name} key={index} id={value.uid} type={"vehicles"} />
                ))
            }
        </div>
    )
}

export default Vehicles;