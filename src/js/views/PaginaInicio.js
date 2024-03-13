import React from "react";
import tatooinePlanet from "../../img/tatooinePlanet.jpg";

import "../../styles/home.css";

const PaginaInicio = () => {
    return (
        <div>
            <h1 className="text-warning text-center mt-5 mb-5">Página principal de STAR WARS</h1>
            <h2 className="text-primary text-center mt-5 mb-5">Seleccione una categoría en el menú superior</h2>
            <img className="w-100" src={tatooinePlanet} alt="Star Wars" />
        </div>
    );
};

export default PaginaInicio;