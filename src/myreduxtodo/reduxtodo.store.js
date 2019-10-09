import { createStore } from 'redux';
import { todoReducer } from './reduxtodo.reducer';

export const store = createStore(todoReducer);