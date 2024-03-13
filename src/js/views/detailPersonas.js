import React from "react";

const DetailPersonas = (props) => {

    

    return <ul className="list-element">
        <li><span>Name: </span>{props.element.properties.name}</li>
        <li><span>Birth Year: </span>{props.element.properties.birth_year}</li>
        <li><span>Eye Color: </span>{props.element.properties.eye_color}</li>
        <li><span>Skin Color: </span>{props.element.properties.skin_color}</li>
        <li><span>Gender: </span>{props.element.properties.gender}</li>
        <li><span>Heigth: </span>{props.element.properties.height}</li>
        <li><span>Homeworld: </span>{props.element.properties.homeworld}</li>
    </ul>
};

export default DetailPersonas;