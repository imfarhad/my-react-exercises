import React, { Component } from 'react';

class MyLessonsForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            lesson:{}
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            lesson: {
                name: e.target.name.value,
                type: e.target.type.value,
                place: e.target.place.value
            }
        }, ()=>this.props.addlesson(this.state.lesson))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name"/>
                    <input type="text" name="type"/>
                    <input type="text" name="place"/>
                    <input type="submit" name="Add Lesson"/>
                </form>
            </div>
        )        
    }
}

export default MyLessonsForm;