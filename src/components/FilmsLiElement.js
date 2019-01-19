import React from 'react';

const FilmsLiElement = props =>{

    return (
        <>
            <h1>Star Wars: {props.responseData.title}</h1>
            <p>Episode: {props.responseData.episode_id}</p>
            <p>Release date: {props.responseData.release_date}</p>
            <p>Director: {props.responseData.director}</p>
            <p>Producer: {props.responseData.producer}</p>
            <p>Opening crawl: {props.responseData.opening_crawl}</p>
        </>
    );
};

export default FilmsLiElement;