export const addTodoAction = (addTodo) => ({
    type: 'ADD_TODO',
    payload: {
        route: addTodo
    }
})

export const createTodoAction = (todo, route) => ({
    type: 'CREATE_TODO',
    payload: {
        route: route,
        todo: todo
    }
})