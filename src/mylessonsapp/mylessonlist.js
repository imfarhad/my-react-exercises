import React, { Component } from 'react';

class MyLessonList extends Component{
    render(){
        return(
            this.props.lessons.map((lesson, index)=>{
                return(<div key={index}>Name: {lesson.name}, Type: {lesson.type}, Address: {lesson.place}</div>)                            
            })
        )
    }
}

export default MyLessonList;