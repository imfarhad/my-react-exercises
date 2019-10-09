import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddBook extends Component{
    constructor(){
        super();
        this.state = {
            book: []
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            book: {
                name: e.target.name.value,
                author: e.target.author.value,
                price: e.target.price.value
            }
        }, ()=>{
            this.props.addBook(this.state.book);
            this.props.home('');
        });
        e.target.name.value=''
        e.target.author.value=''
        e.target.price.value=''
//        console.log('book submitted');
    }
    render(){
        return(
            <div>
                <Form onSubmit={this.onSubmit}>                
                    <Form.Label column sm={2}>
                    Book Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="name" name="name"/>

                    <Form.Label column sm={2}>
                    Author
                    </Form.Label>
                    <Form.Control type="text" placeholder="author" name="author" />

                    <Form.Label column sm={2}>
                    Price
                    </Form.Label>
                    <Form.Control type="text" placeholder="price" name="price"/>

                    <Button type="submit">Add</Button>
                </Form>
            </div>
        )
    }
}

export default AddBook;