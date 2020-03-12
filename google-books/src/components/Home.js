import React, { Component } from 'react';
import FormComponent from './FormComponent';
import API from '../utils/API';


class Home extends Component {
    state ={
        books: [],
        searchTitle: ""
    }
    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    }
    getBooks = () => {
        API.getBookInfo(this.state.searchTitle)
        .then(res => {
         
            this.setState({
                books: res.data
            })
            console.log(this.state.books)
        })
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>

                <FormComponent handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} searchTitle={this.state.searchTitle}/>

 
            </div>
        );
    }
}

export default Home;