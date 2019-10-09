import React, { Component } from 'react';
import MyLessonForm from './mylessonform';
import MyLessonList from './mylessonlist';

class MyLessonsApp extends Component{
    constructor(){
        super();
        this.state = {
            route: 'home',
            lessons: []
        }
    }

    onClick = (e) =>{
        e.preventDefault();
        this.setState({
            route: 'addLesson'
        }, ()=>{})

    }

    addLesson = (lesson) =>{
        this.setState({
            route: 'home',
            lessons: [...this.state.lessons, lesson]
        }, ()=>{})
    }

    render(){
        return(
            <div>
                <h1>My Lessons App</h1>
                {
                    this.state.route==='addLesson' && <MyLessonForm addlesson={this.addLesson}/>
                }                
                <div>Lesson List</div>
                <MyLessonList lessons={this.state.lessons} />
                <button onClick={this.onClick}>Add Lesson</button>
            </div>
        )
    }
}

export default MyLessonsApp;