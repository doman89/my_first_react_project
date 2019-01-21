import React from 'react';
import FormButton from './FormButton';

const FormButtonField = props => {
    return (
        <div className="formButtonField">
            <FormButton getTypeItem={props.getTypeItem} setTypeItem={props.setTypeItem} name={'People'}/>
            <FormButton getTypeItem={props.getTypeItem} setTypeItem={props.setTypeItem} name={'Planets'}/>
            <FormButton getTypeItem={props.getTypeItem} setTypeItem={props.setTypeItem} name={'Starships'}/>
            <FormButton getTypeItem={props.getTypeItem} setTypeItem={props.setTypeItem} name={'Vehicles'}/>
            <FormButton getTypeItem={props.getTypeItem} setTypeItem={props.setTypeItem} name={'Films'}/>
            <FormButton getTypeItem={props.getTypeItem} setTypeItem={props.setTypeItem} name={'Species'}/>
        </div>
    )
};

export default FormButtonField;