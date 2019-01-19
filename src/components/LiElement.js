import React from 'react';
import PeopleLiElement from './PeopleLiElement';
import StarshipsLiElement from './StarshipsLiElement';
import PlanetsLiElement from './PlanetsLiElement';

const LiElement = props =>{

    const putRightLiElement = (props) => {
        switch (props.getTypeItem) {
            case 'people': return <PeopleLiElement responseData={props.responseData}/>;
            case 'planets': return <PlanetsLiElement responseData={props.responseData}/>;
            case 'starships': return <StarshipsLiElement responseData={props.responseData}/>;
            case 'vehicles': break;
            case 'films': break;
            case 'species': break;
            default: return null;
        }
    };
    return (
      <li>
          {putRightLiElement(props)}
      </li>
    );
};

export default LiElement;