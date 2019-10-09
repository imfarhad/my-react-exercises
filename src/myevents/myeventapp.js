import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from './myevents.action';
import { store } from './myevent.store';

class MyEventApp extends Component{

/*    constructor(props){
        super(props);
        this.state = {
            events : []
        }
    }
*/   

    onClickAddEvent = () =>{
        const task = document.getElementById("task").value;
        console.log(task);
        document.getElementById("task").value = '';
        store.dispatch({
            type: 'CREATE_EVENT',
            payload: {
                id: 10,
                name: task
            }
        })
//        console.log(this.props);
//        this.props.dispatch()
        console.log(this.props);
    }

    render(){
        return(
            <div>
                <div><h1>Hello From My Event App Page</h1></div>
                <input type="text" placeholder="Event Name" name="task" id="task"/>
                <input type="button" onClick={this.onClickAddEvent} value="ADD EVENT"/>

                <div>
                    {
                        this.props.tasks.map((task)=>{
                            return(<div key={task.id}>{task.name}</div>)
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    tasks: state
})


export default connect(mapStateToProps)(MyEventApp);