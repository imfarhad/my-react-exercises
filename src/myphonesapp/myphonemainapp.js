import React, { Component } from 'react';
import MyPhoneApp from './myphoneapp';
import { Provider } from 'react-redux';
import { store } from './store'


class MyPhoneMainApp extends Component{
    render(){
        return(
            <Provider store={store}>
                <MyPhoneApp randomProp='A Random Prop'/>
            </Provider>
        )
    }
}

export default MyPhoneMainApp;