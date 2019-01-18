import React from 'react';
import FormButton from './FormButton';

const FormButtonField = props => {
    return (
        <div className="formButtonField">
            <FormButton className={'selected'} setTypeItem={props.setTypeItem} name={'People'}/>
            <FormButton setTypeItem={props.setTypeItem} name={'Planets'}/>
            <FormButton setTypeItem={props.setTypeItem} name={'Starships'}/>
            <FormButton setTypeItem={props.setTypeItem} name={'Vehicles'}/>
            <FormButton setTypeItem={props.setTypeItem} name={'Films'}/>
            <FormButton setTypeItem={props.setTypeItem} name={'Species'}/>
        </div>
    )
};

export default FormButtonField;