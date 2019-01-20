import React from 'react';
import FilmTitleLiElement from './FilmTitleLiElement';

const SpeciesLiElement = props =>{

    const filmsList = props.responseData.films.map((film, index) => <li id={index}><FilmTitleLiElement titleAddress={film} /></li>);
    return (
        <>
            <h1>{props.responseData.name}</h1>
            <p>Average height: {props.responseData.average_height}</p>
            <p>Average lifespan: {props.responseData.average_lifespan}</p>
            <p>Classification: {props.responseData.classification}</p>
            <p>Designation: {props.responseData.designation}</p>
            <p>Eye colours: {props.responseData.eye_colors}</p>
            <p>Hair colours: {props.responseData.hair_colors}</p>
            <p>Language: {props.responseData.language}</p>
            <p>Skin colours: {props.responseData.skin_colors}</p>
            <ul className={'nestedList'}>
                <p>Films:</p>
                {filmsList}
            </ul>
        </>
    );
};

export default SpeciesLiElement;