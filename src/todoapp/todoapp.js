/*
A single file simple todo app
*/
import React, { Component } from 'react';

class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({ text: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.length){
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    render(){
        return(
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Enter Todo
                    </label>
                    <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
                    <button>Add TODO</button>
                </form>
            </div>
        )
    }
}

class TodoList extends Component{
    render(){
        return(
            <ul>
                {this.props.items.map(item =>(
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

export default TodoApp;