import React, { Component } from 'react';

class MyTaskForm extends Component{
    onSubmit = e =>{
        e.preventDefault();
        this.props.task(e.target.task.value)
    }
    render(){
        return(
            <div>
            <div><h1>My Add Task Form</h1></div>
            <form onSubmit={this.onSubmit}>
                <label>Enter Task</label>
                <input type="text" name="task"/>
                <button type="submit">Add Task</button>
            </form>
            </div>
        )
    }
}

export default MyTaskForm;