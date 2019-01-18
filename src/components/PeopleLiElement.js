import React from 'react';

const PeopleLiElement = props =>{

    return (
        <>
            <h1>{props.responseData.name}</h1>
            <p>Gender: {props.responseData.gender}</p>
            <p>Height: {props.responseData.height}</p>
            <p>Birth year: {props.responseData.birth_year}</p>
            <p>Mass: {props.responseData.mass}</p>
            <p>Eye color: {props.responseData.eye_color}</p>
            <p>Skin color: {props.responseData.skin_color}</p>
            <p>Hair color: {props.responseData.hair_color}</p>
        </>
    );
}

export default PeopleLiElement;