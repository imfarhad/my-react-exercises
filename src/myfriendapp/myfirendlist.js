import React, { Component } from 'react';

class MyFriendList extends Component{

    render(){
        const { friends } = this.props;
        return(
            <div className='friendListContainer'>
                {
                    friends.map((friend, index)=>
                        <div key={index}>{friend}</div>
                    )
                }
            </div>
        )
        
    }
}

export default MyFriendList;