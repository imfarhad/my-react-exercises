import React, { Component } from 'react';
import TodoItem from './todoitem';

class TodoList extends Component{

    render(){
        const { todos } = this.props;
        return(
            <div className='todoListContainer'>
                {
                    todos.map((_todo, _index)=>{
                        return(
                            <TodoItem key={_index} todo={_todo}/>
//                            <li key={_index}>{_todo}</li>
                        )
                    })
                }
            </div>
        )
        
    }
}

export default TodoList;