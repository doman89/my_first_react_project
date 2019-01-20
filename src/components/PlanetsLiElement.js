import React from 'react';
import FilmTitleLiElement from './FilmTitleLiElement';
import GetNameLiElement from './GetNameLiElement';

const PlanetsLiElement = props => {

    const filmsList = props.responseData.films.map((film, index) => <li key={index}><FilmTitleLiElement titleAddress={film} /></li>);
    const residentsList = props.responseData.residents.map((resident, index) => <li key={index}><GetNameLiElement nameAddress={resident} /></li>);
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
              {filmsList.length !== 0 ? filmsList : <li>{'n/a'}</li>}
          </ul>
          <ul className={'nestedList'}>
              <p>Residents:</p>
              {residentsList.length !== 0 ? residentsList : <li>{'n/a'}</li>}
          </ul>
      </>
    );
};

export default PlanetsLiElement;