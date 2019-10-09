import React, { Component } from 'react';

class MyTaskList extends Component{
    render(){
        return(
            <div>
                <h1>My Task List</h1>
                {
                    this.props.tasks.map((task, index)=>{
                        return(<div key={index}>{task}</div>)                        
                    })
                }
            </div>
        )
    }
}

export default MyTaskList;