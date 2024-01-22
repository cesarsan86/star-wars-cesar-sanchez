import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../styles/description.css";

const VehicleDescription = () => {

    const [propiedades, setPropiedades] = useState({});
    const [descripcion, setDescripcion] = useState("");

    const { id } = useParams();

    async function solicitarData() {
        const respose = await fetch("https://swapi.tech/api/vehicles/" + id);
        const data = await respose.json();
        const result = data.result.properties;
        const result2 = data.result.description;
        setPropiedades(result);
        setDescripcion(result2);
    }

    useEffect(() => {
        solicitarData();
    }, [])

    return (
        <div className="contenedor-principal-characters">
            <div className="container contenedor-descripcion">
                <img src="https://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="..."/>
                <div>
                    <h2 className="text-warning">{propiedades.name}</h2>
                    <p>{descripcion}</p>
                </div>
            </div>
            <div className="container contenedor-propiedades">
                <div className="text">
                    <p>Name</p>
                    <p>{propiedades.name}</p>
                </div>
                <div className="text">
                    <p>Model</p>
                    <p>{propiedades.model}</p>
                </div>
                <div className="text">
                    <p>Vehicle class</p>
                    <p>{propiedades.vehicle_class}</p>
                </div>
                <div className="text">
                    <p>Manufacturer</p>
                    <p>{propiedades.manufacturer}</p>
                </div>
                <div className="text">
                    <p>Length</p>
                    <p>{propiedades.length}</p>
                </div>
                <div className="text">
                    <p>Passengers </p>
                    <p>{propiedades.passengers}</p>
                </div>
            </div>
        </div>
    )
}

export default VehicleDescription;