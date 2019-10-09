import React, { Component } from 'react';

const TASK_STATUSES = [
    'todo',
    'in-progress',
    'done'
]

class TaskClass extends Component{
    render(){
        return (        
            <div className="task">
                <div className="task-header">
                    <div><u>{this.props.task.title}</u></div>
                    <select value={this.props.task.status} onChange={this.onClick}>
                        {
                            TASK_STATUSES.map(status=>(
                                <option key={status} value={status}>{status}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="task-body">
                    <div>{this.props.task.description}</div>
                </div>
            </div>
        )
    }
    onClick = event => {
        event.preventDefault();
        alert(event.target.value);
        console.log(this.props);
    }

    mapDispatchToProps = (dispatch, props) =>({

    })
}

export default TaskClass;