import React from 'react';
import FilmTitleLiElement from './FilmTitleLiElement';
import GetNameLiElement from './GetNameLiElement';

const PeopleLiElement = props => {

    const filmsList = props.responseData.films.map((film, index) => <li key={index}><FilmTitleLiElement titleAddress={film} /></li>);
    const speciesList = props.responseData.species.map((type, index) => <li key={index}><GetNameLiElement nameAddress={type} /></li>);
    const starshipsList = props.responseData.starships.map((starship, index) => <li key={index}><GetNameLiElement nameAddress={starship} /></li>);
    const vehiclesList = props.responseData.vehicles.map((vehicle, index) => <li key={index}><GetNameLiElement nameAddress={vehicle} /></li>);
    return (
        <>
            <h1>{props.responseData.name}</h1>
            <p>Gender: {props.responseData.gender}</p>
            <p>Height: {props.responseData.height}</p>
            <p>Year of birth: {props.responseData.birth_year}</p>
            <p>Weight: {props.responseData.mass}</p>
            <p>Eye colour: {props.responseData.eye_color}</p>
            <p>Skin colour: {props.responseData.skin_color}</p>
            <p>Hair colour: {props.responseData.hair_color}</p>
            <ul className={'nestedList'}>
                <p>Films:</p>
                {filmsList.length !== 0 ? filmsList : <li>{'n/a'}</li>}
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
    )
};

export default PeopleLiElement;