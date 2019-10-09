import { createStore, combineReducers } from 'redux';
import productReducer from './product.reducer';
import userReducer from './user.reducer';


const allReducers = combineReducers({
    products: productReducer, 
    users: userReducer
});

export const store = createStore(
    allReducers,
    {
        products: [{name:'iPhone'}],
        users: 'Michael'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);