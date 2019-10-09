import React, { Component } from 'react';
import MyTaskForm from './mytaskform';
import MyTaskList from './mytasklist';

class MyTaskApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            route: '',
            tasks: []
        }
    }

    addTask = e =>{
        e.preventDefault();
        this.setState({
            route:'addTask'
        }, ()=>{})
    }
    update = task =>{
        this.setState({
            route: 'home',
            tasks: [...this.state.tasks, task]
        },()=>{})
    }
    render(){
        return(
            <div>
                {
                    (this.state.route==='addTask')
                    ? <MyTaskForm task={this.update}/>
                    : <div>
                        <MyTaskList tasks={this.state.tasks}/>
                        <button onClick={this.addTask}>Add Task</button>
                    </div>
                }
            </div>
        )
    }
}

export default MyTaskApp;