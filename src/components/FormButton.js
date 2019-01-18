import React from 'react';

const FormButton = (props) => {
    return (
        <button onClick={props.setTypeItem} className={props.className}>{props.name}</button>
    )
};

export default FormButton;