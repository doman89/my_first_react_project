import React from 'react';
import FilmTitleLiElement from './FilmTitleLiElement';

const PlanetsLiElement = props => {

    const filmsList = props.responseData.films.map((film, index) => <li id={index}><FilmTitleLiElement titleAddress={film} /></li>);
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
          <ul className={'nestedList'}>
              <p>Films:</p>
              {filmsList}
          </ul>
      </>
    );
};

export default PlanetsLiElement;