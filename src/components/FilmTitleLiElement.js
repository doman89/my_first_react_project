import React from 'react';

class FilmTitleLiElement extends React.Component {

    state = {
      filmTitle: '',
    };

    componentDidMount() {
        fetch(this.props.titleAddress)
            .then(response => response.json())
            .then(response => this.setState({
                filmTitle: response.title,
            }));
    };

    render() {
        return (
            <>
                {this.state.filmTitle ? this.state.filmTitle : "I'm loading film title..."}
            </>
        );
    };
};

export default FilmTitleLiElement;