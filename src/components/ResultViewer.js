import React from 'react';
import LiElement from "./LiElement";

const handleOnClick = props => {
  console.log(props);
};

const ResultViewer = (props) => {

    let searchingResult = null;
    if(props.responseData.length)
        searchingResult = props.responseData.map((item,index) => (
            <LiElement key={index} responseData={item} getTypeItem={props.getTypeItem}/>));

    return (
        <div onClick={() => handleOnClick(props)}>
            <p className={'searchingInfo'}>{props.getAlreadyNameItem ?
                `You are looking for ${props.getAlreadyNameItem} item in ${props.getTypeItem ? props.getTypeItem : 'any'} field.` :
                `If you are looking for any items, type in input field`}
            </p>
            <p className={'numberOfResults'}>Number of results: {props.responseData.length ? props.responseData.length : '0'}</p>
            <ul>
                {searchingResult}
            </ul>
        </div>
    );
};

export default ResultViewer;