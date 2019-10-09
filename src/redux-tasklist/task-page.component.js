import React, { Component } from 'react';
import TaskList from './task-list.component';

const TASK_STATUS = ['todo','in-progress','done'];

class TaskPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showNewCardForm: false,
            title: '',
            description: '',
        }
    }

    onTitleChange = e => {
        this.setState({...this.state, title:e.target.value})
    }

    onDescriptionChange = e => {
        this.setState({...this.state, description:e.target.value})
    }

    resetForm = () => {
        this.setState({
            showNewCardForm: false,
            title: '',
            description: '',            
        })
    }

    onCreateTask = (e) => {
        e.preventDefault();
        this.props.onCreateTask({
            title: this.state.title,
            description: this.state.description,
        });
        this.resetForm();
    }

    toggleForm = () => {
        this.setState({ showNewCardForm: !this.state.showNewCardForm});
    }

    renderTaskLists(){
        const { tasks } = this.props;
        return TASK_STATUS.map(status => {
            const statusTask = tasks.filter(task => task.status===status);
            return (
                <TaskList 
                    key={status} 
                    status={status} 
                    tasks={statusTask} 
                />)
        });
    }

    render(){
        return(
            <div className="tasks">
                <div className="task-list-header">
                    <button 
                        className="button button-default"
                        onClick={this.toggleForm}
                    >
                        + New Task
                    </button>
                </div>
                {this.state.showNewCardForm && (
                <form className="task-list-form" onSubmit={this.onCreateTask}>
                    <input
                        className="full-width-input"
                        onChange={this.onTitleChange}
                        value={this.state.title}
                        type="text"
                        placeholder="title"
                    />
                    <input
                        className="full-width-input"
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                        type="text"
                        placeholder="description"
                    />
                    <button
                        className="button"
                        type="submit"                        
                    >
                        Save
                    </button>
                </form>
                )}
                <div className="task-lists">
                    {this.renderTaskLists()}
                </div>
            </div>
        );
    }
}

export default TaskPage;