import React from "react";

const DetailPlanetas = (props) => {

    return <ul className="list-element">
        <li><span>Name: </span>{props.element.properties.name}</li>
        <li><span>Rotation Period: </span>{props.element.properties.rotation_period}</li>
        <li><span>Orbital Period: </span>{props.element.properties.orbital_period}</li>
        <li><span>Diameter: </span>{props.element.properties.diameter}</li>
        <li><span>Climate: </span>{props.element.properties.climate}</li>
        <li><span>Gravity: </span>{props.element.properties.gravity}</li>
        <li><span>Terrain: </span>{props.element.properties.terrain}</li>
        <li><span>Surface Water: </span>{props.element.properties.surface_water}</li>
        <li><span>Population: </span>{props.element.properties.population}</li>
    </ul>
};

export default DetailPlanetas;