import React from 'react';

class GetNameLiElement extends React.Component {

    state = {
        itemName: '',
    };

    componentDidMount() {
        fetch(this.props.nameAddress)
            .then(response => response.json())
            .then(response => this.setState({
                itemName: response.name,
            }));
    };

    render(){
        return (
            <>
                {this.state.itemName ? this.state.itemName : "I'm loading item name..."}
            </>
        );
    };
};

export default GetNameLiElement;