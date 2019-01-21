import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

class App extends React.Component {

    constructor(props){
        super(props);
        this.setTypeItem = this.setTypeItem.bind(this);
        this.sendFetchToApi = this.sendFetchToApi.bind(this);
    }

    state = {
        data: {},
        typeOfSearchingItem: '',
        nameOfSearchingItem: '',
        alreadyNameOfSearchingItem: '',
    };

    setTypeItem = (e) =>{
        e.target.parentNode.querySelectorAll('button').forEach( button => {
            button.classList.remove('selected');
            if(e.target.textContent.toLowerCase() === this.state.typeOfSearchingItem)
                e.target.classList.toggle('selected');
        });
        this.setState({
            data: {},
            alreadyNameOfSearchingItem: '',
            typeOfSearchingItem: e.target.textContent.toLowerCase(),
        })
    };

    sendFetchToApi(){
        this.setState({
            alreadyNameOfSearchingItem:  this.state.nameOfSearchingItem,
        });
        if(this.state.typeOfSearchingItem) {
            fetch(`https://swapi.co/api/${this.state.typeOfSearchingItem}/?search=${this.state.nameOfSearchingItem}`)
                .then(response => response.json())
                .then(response => this.setState({
                    data: response.results,
                }));
        }
    };

    setNameItem = (e) => {
        this.setState({
            data: this.state.data,
            nameOfSearchingItem: e.target.value,
            }
        )
    };

    render() {
        return (
            <>
                <Header/>
                <Content
                    setTypeItem={this.setTypeItem}
                    setNameItem={this.setNameItem}
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
