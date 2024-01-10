import React, { useEffect, useState } from "react";
import Card from './card';
import { useParams } from "react-router";
import "../../styles/description.css";

const CharacterDescription = () => {

    const [propiedades, setPropiedades] = useState({});
    const [descripcion, setDescripcion] = useState("");

    const { id } = useParams();

   async function solicitarData() {
        const respose = await fetch("https://swapi.tech/api/people/" + id);
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
                    <h2>{propiedades.name}</h2>
                    <p>{descripcion}</p>
                </div>
            </div>
            <div className="container contenedor-propiedades">
                <div className="text">
                    <p>Name</p>
                    <p>{propiedades.name}</p>
                </div>
                <div className="text">
                    <p>Birth Year</p>
                    <p>{propiedades.birth_year}</p>
                </div>
                <div className="text">
                    <p>Gender</p>
                    <p>{propiedades.gender}</p>
                </div>
                <div className="text">
                    <p>Height</p>
                    <p>{propiedades.height}</p>
                </div>
                <div className="text">
                    <p>Skin Color</p>
                    <p>{propiedades.skin_color}</p>
                </div>
                <div className="text">
                    <p>Eye Color</p>
                    <p>{propiedades.eye_color}</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterDescription;