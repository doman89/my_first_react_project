import React from 'react';
import FilmTitleLiElement from './FilmTitleLiElement';

const PeopleLiElement = props => {

    const filmsList = props.responseData.films.map((film, index) => <li id={index}><FilmTitleLiElement titleAddress={film} /></li>);
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
                {filmsList}
            </ul>
        </>
    )
};

export default PeopleLiElement;