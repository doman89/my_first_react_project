import React from 'react';
import FilmTitleLiElement from './FilmTitleLiElement';
import GetNameLiElement from './GetNameLiElement';

const StarshipLiElement = props =>{

        const filmsList = props.responseData.films.map((film, index) => <li key={index}><FilmTitleLiElement titleAddress={film} /></li>);
        const pilotsList = props.responseData.pilots.map((pilot, index) => <li key={index}><GetNameLiElement nameAddress={pilot} /></li>);

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
                <ul className={'nestedList'}>
                        <p>Films:</p>
                        {filmsList.length !== 0 ? filmsList : <li>{'n/a'}</li>}
                </ul>
                <ul className={'nestedList'}>
                        <p>Pilots:</p>
                        {pilotsList.length !== 0 ? pilotsList : <li>{'n/a'}</li>}
                </ul>
            </>
        );
};

export default StarshipLiElement;