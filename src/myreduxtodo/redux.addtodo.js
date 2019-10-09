import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createTodoAction} from './reduxtodo.action';

class RxAddTodo extends Component{
    onClick = (event) =>{
        event.preventDefault();
        const todo = document.getElementById("todo").value;
        const route='home';
        this.props.addTodo(todo,route);
        
    }
    onCancel = (event) =>{
        event.preventDefault();
        const route='home';
        this.props.addTodo(null,route);

    }
    render(){
        return(
            <div>
                <h1>Add Todo</h1>
                <input type="text" placeholder="To Do Item" name="todo" id="todo"/>
                <input type="button" onClick={this.onClick} value="ADD" />
                <input type="button" onClick={this.onCancel} value="CANCEL" />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    addTodo: (todo,route) => dispatch(createTodoAction(todo,route))
})

export default connect(null,mapDispatchToProps)(RxAddTodo);