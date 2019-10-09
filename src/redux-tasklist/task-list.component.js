import React from 'react';
//import Task from './task.component';
import TaskClass from './task.class.component';

const TaskList = props =>{
    return(
        <div className="task-list">
            <div className="task-list-title">
                <strong>{props.status}</strong>
            </div>
            {
                props.tasks.map(task =>(
                    <TaskClass key={task.id} task={task} />
                ))
            }
        </div>
    );
}

export default TaskList;