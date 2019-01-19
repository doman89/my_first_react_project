import React from 'react';


const PlanetsLiElement = props => {
    return (
      <>
          <h1>{props.responseData.name}</h1>
          <p>Climate: {props.responseData.climate}</p>
          <p>Diameter: {props.responseData.diameter}</p>
          <p>Gravity: {props.responseData.gravity}</p>
          <p>Orbital period: {props.responseData.orbital_period}</p>
          <p>Rotation period: {props.responseData.rotation_period}</p>
          <p>Population: {props.responseData.population}</p>
          <p>Surface water: {props.responseData.surface_water}</p>
          <p>Terrain: {props.responseData.terrain}</p>
      </>
    );
};

export default PlanetsLiElement;