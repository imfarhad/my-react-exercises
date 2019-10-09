import { uniqueId } from './task.action-creator';

const mockTasks = [
    {
        id: uniqueId(),
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'in-progress',        
    },
    {
        id: uniqueId(),
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'in-progress',
    },    
];

export default function tasks(state={tasks:mockTasks},action){
    if(action.type==='CREATE_TASK'){
        return {
            tasks: state.tasks.concat(action.payload)
        };
    }
    return state;
}