import React from 'react';
import Formular from "./Formular";
import ResultViewer from "./ResultViewer";

const Content = (props) => {

    return (
      <div className="content">
          <Formular
              setTypeItem={props.setTypeItem}
              setNameItem={props.setNameItem}
              sendRequest={props.sendRequest}
          />
          <ResultViewer
              responseData={props.responseData}
              getAlreadyNameItem={props.getAlreadyNameItem}
              getTypeItem={props.getTypeItem}
          />

      </div>
    );
};

export default Content;
