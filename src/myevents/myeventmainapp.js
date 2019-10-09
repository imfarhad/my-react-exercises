import React from 'react';
import { Provider } from 'react-redux';
import MyEventApp from './myeventapp';
import { store } from './myevent.store';

export const MyEventMainApp = () =>{
    return(
        <Provider store={store}>
            <MyEventApp />
        </Provider>
    )
}