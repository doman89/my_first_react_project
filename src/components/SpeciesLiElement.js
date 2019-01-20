import React from 'react';
import FilmTitleLiElement from './FilmTitleLiElement';
import GetNameLiElement from './GetNameLiElement';

const SpeciesLiElement = props =>{

    const filmsList = props.responseData.films.map((film, index) => <li key={index}><FilmTitleLiElement titleAddress={film} /></li>);
    const peopleList = props.responseData.people.map((person, index) => <li key={index}><GetNameLiElement nameAddress={person} /></li>);
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
                {filmsList.length !== 0 ? filmsList : <li>{'n/a'}</li>}
            </ul>
            <ul className={'nestedList'}>
                <p>People:</p>
                {peopleList.length !== 0 ? peopleList : <li>{'n/a'}</li>}
            </ul>
        </>
    );
};

export default SpeciesLiElement;