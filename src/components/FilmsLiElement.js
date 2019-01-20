import React from 'react';
import GetNameLiElement from './GetNameLiElement';

const FilmsLiElement = props =>{

    const charactersList = props.responseData.characters.map((character, index) => <li key={index}><GetNameLiElement nameAddress={character} /></li>);
    const planetsList = props.responseData.planets.map((planet, index) => <li key={index}><GetNameLiElement nameAddress={planet} /></li>);
    const speciesList = props.responseData.species.map((type, index) => <li key={index}><GetNameLiElement nameAddress={type} /></li>);
    const starshipsList = props.responseData.starships.map((starship, index) => <li key={index}><GetNameLiElement nameAddress={starship} /></li>);
    const vehiclesList = props.responseData.vehicles.map((vehicle, index) => <li key={index}><GetNameLiElement nameAddress={vehicle} /></li>);
    return (
        <>
            <h1>Star Wars: {props.responseData.title}</h1>
            <p>Episode: {props.responseData.episode_id}</p>
            <p>Release date: {props.responseData.release_date}</p>
            <p>Director: {props.responseData.director}</p>
            <p>Producer: {props.responseData.producer}</p>
            <p>Opening crawl: {props.responseData.opening_crawl}</p>
            <ul className={'nestedList'}>
                <p>Characters:</p>
                {charactersList.length !== 0 ? charactersList : <li>{'n/a'}</li>}
            </ul>
            <ul className={'nestedList'}>
                <p>Planets:</p>
                {planetsList.length !== 0 ? planetsList : <li>{'n/a'}</li>}
            </ul>
            <ul className={'nestedList'}>
                <p>Species:</p>
                {speciesList.length !== 0 ? speciesList : <li>{'n/a'}</li>}
            </ul>
            <ul className={'nestedList'}>
                <p>Starships:</p>
                {starshipsList.length !== 0 ? starshipsList : <li>{'n/a'}</li>}
            </ul>
            <ul className={'nestedList'}>
                <p>Vehicles:</p>
                {vehiclesList.length !== 0 ? vehiclesList : <li>{'n/a'}</li>}
            </ul>
        </>
    );
};

export default FilmsLiElement;