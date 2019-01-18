import React from 'react';
import FormButton from './FormButton';
import ListElement from './ListElement';

class MyFormular extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        status: "all",
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
    };

    handleButtonClick( choose ){
      if( choose === "all"){
          this.setState({
              status: true,
          });
      }else if( choose === "man"){
          this.setState({
              status: "man",
          });
      }else if( choose === "woman"){
          this.setState({
           status: "woman",
          });
      }else {
          this.setState({
              status: null,
          })
      }
    };

    render(){
        let users = this.props.data.users;
        users = users.filter( user => user.sex === this.state.status || this.state.status === true);
        return(
            <React.Fragment>
                <form onSubmit={this.handleFormSubmit}>
                    <FormButton
                        click={this.handleButtonClick.bind(this, "man")}
                        description={"Men"}
                    />
                    <FormButton
                        click={this.handleButtonClick.bind(this, "woman")}
                        description={"Women"}
                    />
                    <FormButton
                        click={this.handleButtonClick.bind(this, "all")}
                        description={"All"}
                    />
                </form>
                <ul>
                    {users.map(user => <ListElement content={user}/>)}
                </ul>
            </React.Fragment>
        )
    }
};

export default MyFormular;
