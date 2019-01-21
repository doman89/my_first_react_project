import React from 'react';
import FormButtonField from './FormButtonField';

const Formular = (props) => {

    const handleFormSubmit = (event) => {
      event.preventDefault();
      props.sendRequest();
    };

    return (
      <div>
          <form onSubmit={handleFormSubmit}>
              <FormButtonField setTypeItem={props.setTypeItem} getTypeItem={props.getTypeItem}/>
              <input
                  type="text"
                  placeholder="Put name to search"
                  onInput={props.setNameItem}
              />
              <button type="submit" onClick={props.sendRequest}>Find!</button>
          </form>
      </div>
    );
};

export default Formular;

