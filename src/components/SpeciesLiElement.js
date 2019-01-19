import React from 'react';

const SpeciesLiElement = props =>{

    return (
        <>
            <h1>{props.responseData.name}</h1>
            <p>Average height: {props.responseData.average_height}</p>
            <p>Average lifespan: {props.responseData.average_lifespan}</p>
            <p>Classification: {props.responseData.classification}</p>
            <p>Designation: {props.responseData.designation}</p>
            <p>Eye colors: {props.responseData.eye_colors}</p>
            <p>Hair colors: {props.responseData.hair_colors}</p>
            <p>Language: {props.responseData.language}</p>
            <p>Skin colors: {props.responseData.skin_colors}</p>
        </>
    );
};

export default SpeciesLiElement;