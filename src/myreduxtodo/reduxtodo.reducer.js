const INITIAL_STATE = {
    route: 'home',
    todos: ['Learn JavaScript', 'Learn Redux']
};

export const todoReducer = (state=INITIAL_STATE, {type, payload}) => {
    if(type==='ADD_TODO'){
        return{
            route: payload.route,
            todos: [...state.todos]
        }
    }
    else if(type==='CREATE_TODO'){
        return {
            route: payload.route,
            todos: [...state.todos, payload.todo]
        };
    }
    return state;    
}