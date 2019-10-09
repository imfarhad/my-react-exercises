import React, { Component } from 'react';

class AddTodo extends Component{

    constructor(){
        super();
        this.state = {
            todo: ''
        }
    }
    render(){
        return(
            <div className='addTodoContainer'>
                <form onSubmit={(e)=>this.submitTodo(e)}>
                    <input id='addTodoInput' 
                        type='text' 
                        onChange={(e)=>this.updateInput(e)}/>
                    <button type='submit'>Add Todo</button>
                </form>
            </div>
        )
        
    }

    updateInput = (e) => {
        this.setState({ todo: e.target.value });
    }

    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo);
        document.getElementById('addTodoInput').value='';
    }
}

export default AddTodo;