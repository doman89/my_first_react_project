import React from 'react';
import FilmTitleLiElement from './FilmTitleLiElement';

const VehiclesLiElement = props =>{

    const filmsList = props.responseData.films.map((film, index) => <li id={index}><FilmTitleLiElement titleAddress={film} /></li>);
    return (
        <>
            <h1>{props.responseData.name}</h1>
            <p>Cargo capacity: {props.responseData.cargo_capacity}</p>
            <p>Consumables: {props.responseData.consumables}</p>
            <p>Cost in credits: {props.responseData.cost_in_credits}</p>
            <p>Crew: {props.responseData.crew}</p>
            <p>Length: {props.responseData.length}</p>
            <p>Manufacturer: {props.responseData.manufacturer}</p>
            <p>Maximum speed in the atmoshere: {props.responseData.max_atmosphering_speed}</p>
            <p>Model: {props.responseData.model}</p>
            <p>Passengers: {props.responseData.passengers}</p>
            <p>Vehicle class: {props.responseData.vehicle_class}</p>
            <ul className={'nestedList'}>
                <p>Films:</p>
                {filmsList}
            </ul>
        </>
    );
};

export default VehiclesLiElement;