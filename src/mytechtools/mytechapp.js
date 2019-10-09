import React, { Component } from 'react';

class MyTechApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            techtools: ['todo']
        }
    }

    onClick = (event) =>{
        event.preventDefault();
        const tool = document.getElementById('techtool').value;
        this.setState({
            techtools: [...this.state.techtools, tool]
        }, ()=>{})
        document.getElementById('techtool').value = '';
    }

    onElementClick = (event) =>{
        const elem = document.getElementById('element').text;
        console.log(elem);
    }

    render(){
        return(
            <div>
                <div>Hello World from MyTechApp</div>
                <label>Enter Techtool::</label>
                <input type="text" id="techtool" name="techtool"/>
                <input type="button" value="submit" onClick={this.onClick}/>
                <div>
                    <ul id="element">
                        { this.state.techtools.map( (tool,id) => <li key={id} onDoubleClick={this.onElementClick}>{tool}</li>) }
                    </ul>
                </div>
            </div>
        );
    }
}

export default MyTechApp;