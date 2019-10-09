import React from 'react';
import { Provider } from 'react-redux';
import { store } from './task.store';
import ReduxTaskApp from './redux-task-app';

export const ReduxApp = () =>{
    return(
        <Provider store={store}>
            <ReduxTaskApp />
        </Provider>
    )
}