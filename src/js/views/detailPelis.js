import React from "react";

const DetailPelis = (props) => {

    return <ul className="list-element">
        <li><span>Title: </span>{props.element.properties.title}</li>
        <li><span>Episode ID: </span>{props.element.properties.episode_id}</li>
        <li><span>Opening Crawl: </span>{props.element.properties.opening_crawl}</li>
        <li><span>Director: </span>{props.element.properties.director}</li>
        <li><span>Producer: </span>{props.element.properties.producer}</li>
        <li><span>Release Date: </span>{props.element.properties.release_date}</li>
    </ul>
};

export default DetailPelis;