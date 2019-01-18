import React from 'react';

const ListElement = (props) => {
    return (
        <li>
            <h1>{props.content.surname}</h1>
            <h2>{props.content.name}</h2>
            <p>Wiek: {props.content.age} lat</p>
        </li>
    );
};

export default ListElement;