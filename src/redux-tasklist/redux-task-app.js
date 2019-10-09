import React, { Component } from 'react';
import TaskPage from './task-page.component';
import './app.styles.css'
import { connect } from 'react-redux';
import { createTask } from './task.action-creator';


class ReduxTaskApp extends Component{
    onCreateTask = ({title, description}) => {
        this.props.dispatch(createTask({title, description}));
    }

    render(){
//        console.log(this.props);
        return(
            <div className="main-content">
                <TaskPage 
                    tasks={this.props.tasks}
                    onCreateTask={this.onCreateTask}
                />
            </div>
        )
    }
}

const mapStateToProps = state =>({
    tasks: state.tasks
})

export default connect(mapStateToProps)(ReduxTaskApp);