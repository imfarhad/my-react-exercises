import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from './user.action';

class MyPhoneApp extends Component {
    onUpdateUser = (event) =>{
        this.props.onUpdateUser(event.target.value);
    }
    render(){
        return(
            <div>
                <div>Hello</div>
                <input onChange={this.onUpdateUser} />
                <div>{this.props.user}</div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) =>{
    console.log('props from mapStateToProps: '+props.randomProp);
    return{
        products: state.products,
        user: state.users
    }
}

const mapActionsToProps = (dispatch, props) => ({
        onUpdateUser: args => dispatch(updateUser(args, props.randomProp))
})


export default connect(mapStateToProps, mapActionsToProps)(MyPhoneApp);