import React, { useEffect, useState, useContext } from "react";
import Card from "../views/card.js";
import { Context } from "../store/appContext.js";
import "../../styles/cardContainer.css";

const Characters = () => {

    const contexto = useContext(Context);

    const [characters, setCharacters] = useState([]);

    
    function solicitarData () {
         fetch("https://swapi.tech/api/people")
        .then(response => response.json())
        .then(data => setCharacters(data.results))
        .catch(error => console.log(error));
    }
    

    useEffect(() => {
        solicitarData();
    }, [])

    return (
        <div className="contenedor-cards">
            {
                characters.map((value, index) => (
                    <Card nombre={value.name} key={index} id={value.uid} type={"characters"} />
                ))
            }
        </div>
    )
}

export default Characters;