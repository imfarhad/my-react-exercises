import React from 'react';
import { Provider } from 'react-redux';
import { store } from './reduxtodo.store';
import ReduxTodoApp from './reduxtodoapp';

export const ReduxTodoMainApp = () =>{
    return(
        <Provider store={store}>
            <ReduxTodoApp />
        </Provider>
    )
}