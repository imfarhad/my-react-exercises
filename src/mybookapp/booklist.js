import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


class BookList extends Component{
    render(){
        return(
            <div>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.books.map((book, index) =>{
                        return(
                            <tr key={index}>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
                </Table>
            </div>
        )
    }
}

export default BookList;