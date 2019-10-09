import React, { Component } from 'react';

class AddFriend extends Component{
    constructor(){
        super();
        this.state = {
            friend: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState(
            { friend: e.target.name.value }, 
            () => this.props.addFriend(this.state.friend))
            e.target.name.value='';
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input type='text' name='name'/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default AddFriend;