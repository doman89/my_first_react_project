import React from 'react';
import FormButtonField from './FormButtonField';

const Formular = (props) => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };

    const handleKeyPress = event => {
      if(event.key === 'Enter')
          props.sendRequest();
    };

    return (
      <div>
          <form onSubmit={handleFormSubmit}>
              <FormButtonField setTypeItem={props.setTypeItem}/>
              <input type="text" placeholder="Put name to search" onInput={props.setNameItem} onKeyPress={handleKeyPress}/>
              <button onClick={props.sendRequest}>Find!</button>
          </form>
      </div>
    );
};

export default Formular;

