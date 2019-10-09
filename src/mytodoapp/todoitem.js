import React, { Component } from 'react';

class TodoItem extends Component{
    render(){
        const { todo } = this.props;
        return(
            <div>
                <li>{todo}</li>
            </div>
        )
        
    }
}

export default TodoItem;