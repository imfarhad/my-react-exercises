import React, { Component } from 'react';
import RxAddTodo from './redux.addtodo';
import { connect } from 'react-redux';
import { addTodoAction } from './reduxtodo.action';

class ReduxTodoApp extends Component{

    onClickAdd = (event) =>{
        event.preventDefault();
        this.props.addTodo('addTodo');
    }

    render(){
        return(
            <div>
                <h1>Redux Todo App</h1>
                { this.props.route==='addTodo'
                    ? <RxAddTodo/>
                    : <div>
                        <input type="button" onClick={this.onClickAdd} value="Add Todo" />                            
                        {this.props.todos.map((todo, key)=><div key={key}><h3>{todo}</h3></div>)}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    route: state.route,
    todos: state.todos
})

const mapDispatchToProps = (dispatch) =>({
    addTodo: args => dispatch(addTodoAction(args))
})
export default connect(mapStateToProps,mapDispatchToProps)(ReduxTodoApp);