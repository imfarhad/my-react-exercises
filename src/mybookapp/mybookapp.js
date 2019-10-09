import React, { Component } from 'react';
import AddBook from './addbook';
import BookList from './booklist';
import Button from 'react-bootstrap/Button';
import '../App.css';

class MyBookApp extends Component {
    constructor(){
        super();
        this.state = {
            route: '',
            books : []
        }
    }

    addBook = (book) =>{
        this.setState({
            books: [...this.state.books, book]
        }, ()=>{});
    }

    onClick = (e) =>{
        e.preventDefault();
        this.setState({route:'addbook'},()=>{})
    }

    showHome = (route) =>{
        this.setState({
            route: route
        })
    }

    render(){
        return(
            <div className='App'>
                {
                    this.state.route==='addbook'
                    ? <AddBook addBook={this.addBook} home={this.showHome}/>
                    : 
                    <div>
                        <Button onClick={this.onClick}>Add Book</Button><br/>
                        <BookList books={this.state.books} />
                    </div>

                }
            </div>
        )
    }
}

export default MyBookApp;