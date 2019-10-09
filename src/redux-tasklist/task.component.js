import React from 'react';

const TASK_STATUSES = [
    'todo',
    'in-progress',
    'done'
]
const Task = props => {
    return (        
        <div className="task">
            <div className="task-header">
                <div><u>{props.task.title}</u></div>
                <select value={props.task.status} onChange={onClick}>
                    {
                        TASK_STATUSES.map(status=>(
                            <option key={status} value={status}>{status}</option>
                        ))
                    }
                </select>
            </div>
            <div className="task-body">
                <div>{props.task.description}</div>
            </div>
        </div>
    )
}
const onClick = event => {
    event.preventDefault();
    alert(event.target.value);
}

export default Task;