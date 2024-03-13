import React from "react";

const DetailNaves = (props) => {

    return <ul className="list-element">
        <li><span>Name: </span>{props.element.properties.name}</li>
        <li><span>Model: </span>{props.element.properties.model}</li>
        <li><span>Manufacturer: </span>{props.element.properties.manufacturer}</li>
        <li><span>Cost in Credits: </span>{props.element.properties.cost_in_credits}</li>
        <li><span>Length: </span>{props.element.properties.length}</li>
        <li><span>Max Atmosphering Speed: </span>{props.element.properties.max_atmosphering_speed}</li>
        <li><span>Crew: </span>{props.element.properties.crew}</li>
        <li><span>Passengers: </span>{props.element.properties.passengers}</li>
        <li><span>Cargo Capacity: </span>{props.element.properties.cargo_capacity}</li>
        <li><span>Consumables: </span>{props.element.properties.consumables}</li>
        <li><span>Hyperdrive Rating: </span>{props.element.properties.hyperdrive_rating}</li>
        <li><span>MGLT: </span>{props.element.properties.MGLT}</li>
        <li><span>Starship Class: </span>{props.element.properties.starship_class}</li>

    </ul>
};

export default DetailNaves;