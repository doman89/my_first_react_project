import React from 'react';

const StarshipLiElement = props =>{

    return (
        <>
            <h1>{props.responseData.name}</h1>
            <p>Model: {props.responseData.model}</p>
            <p>Starship class: {props.responseData.starship_class}</p>
            <p>Manufacturer: {props.responseData.manufacturer}</p>
            <p>Cost in credits: {props.responseData.cost_in_credits}</p>
            <p>Length: {props.responseData.length}</p>
            <p>Crew: {props.responseData.crew}</p>
            <p>Passengers: {props.responseData.passengers}</p>
            <p>Max speed in atmosphere: {props.responseData.max_atmosphering_speed}</p>
            <p>Class of starship hyperdrive: {props.responseData.hyperdrive_rating}</p>
            <p>The Maximum number of Megalights: {props.responseData.MGLT}</p>
            <p>Cargo capacity: {props.responseData.cargo_capacity}</p>
            <p>Consumables: {props.responseData.consumables}</p>
        </>
    );
}

export default StarshipLiElement;