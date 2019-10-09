import { createStore } from 'redux';
import tasks from './task-reducer';

export const store = createStore(tasks);