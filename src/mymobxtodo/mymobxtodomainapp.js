import React, { Component } from 'react';
import TodoList from './todolist';
import observableTodoStore from './observabletodostore';

class MyMobxTodoMainApp extends Component{
    render(){
        return(
            <TodoList store={observableTodoStore} />
        )
    }
}

export default MyMobxTodoMainApp;