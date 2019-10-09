import React, { Component } from 'react';
import MyFriendList from './myfirendlist';
import AddFriend from './addfriend';

class MyFriendApp extends Component{
    constructor(){
        super();
        this.state = {
            route: '',
            friends: []
        }
    }

    addFriend = (friend) => {
        this.setState(
            { friends: [...this.state.friends, friend] }, 
            () => {});
    }

    render(){
        return(
            <div>
                <AddFriend addFriend={this.addFriend}/>
                <MyFriendList friends={this.state.friends} />
            </div>
        )
    }
}

export default MyFriendApp;