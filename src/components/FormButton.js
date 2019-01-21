import React from 'react';

const FormButton = (props) => {
    return (
        <button
            type="button"
            onClick={props.setTypeItem}
            className={props.getTypeItem.toLowerCase() === props.name.toLowerCase() ? 'selected' : null }>
            {props.name}
        </button>
    )
};

export default FormButton;