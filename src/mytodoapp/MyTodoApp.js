import React, { Component } from 'react';
import TodoList from './todolist';
import AddTodo from './addtodos';

import './mytodostyle.css';

class MyTodoApp extends Component{

    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    render(){
        return(
            <div className='todoapp'>
                <div><h3>My Todos</h3></div>
                <AddTodo addTodoFn={this.addTodo}/>
                <ul>
                    <TodoList todos={this.state.todos}/>
                </ul>
            </div>
        )
    }

    componentDidMount = () =>{
        const todos = localStorage.getItem('todos');
        if(todos){
            const savedTodos = JSON.parse(todos);
            this.setState({todos: savedTodos});
        }
    }

    addTodo = async (todo) => {
        await this.setState({todos: [...this.state.todos, todo]});
        localStorage.setItem('todos',JSON.stringify(this.state.todos));
    }
}

export default MyTodoApp;