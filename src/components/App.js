import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
    state = {
        data: {},
        typeOfSearchingItem: 'people',
        nameOfSearchingItem: '',
        alreadyNameOfSearchingItem: '',
    };

    setTypeItem = (e) => {
            // console.log(e.target);
        e.target.parentNode.querySelectorAll('button').forEach( button => button.classList.remove('selected'));
        e.target.classList.toggle('selected');
        this.setState({
            typeOfSearchingItem: e.target.textContent.toLowerCase(),
        })
    };

    sendFetchToApi = () => {
        this.setState({
            alreadyNameOfSearchingItem:  this.state.nameOfSearchingItem,
        });
        fetch(`https://swapi.co/api/${this.state.typeOfSearchingItem}/?search=${this.state.nameOfSearchingItem}`)
            .then(response => response.json())
            .then(response => this.setState({data: response.results}));

    };

    setNameItem = (e) => {
        this.setState({
            nameOfSearchingItem: e.target.value,
            }
        )
    }

    render() {
        return (
            <>
                <Header/>
                <Content
                    setTypeItem={this.setTypeItem}
                    setNameItem={this.setNameItem}
                    getNameItem={this.state.nameOfSearchingItem}
                    getAlreadyNameItem={this.state.alreadyNameOfSearchingItem}
                    getTypeItem={this.state.typeOfSearchingItem}
                    sendRequest={this.sendFetchToApi}
                    responseData={this.state.data}
                />
                <Footer/>
            </>
        );
    };
}

export default App;
