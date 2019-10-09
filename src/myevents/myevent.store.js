import { createStore } from 'redux';
import { allEvents } from './myevent.reducer';

export const store = createStore(allEvents);