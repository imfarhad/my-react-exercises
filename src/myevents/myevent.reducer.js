let _id = 1;
function uniqueId(){
    return _id++;
}

const tasks =[
    {
        id: uniqueId(),
        name: 'Study JavaScript'
    },
    {
        id: uniqueId(),
        name: 'Study React'
    },
    {
        id: uniqueId(),
        name: 'Study Redux'
    },        
]

export function allEvents(state=tasks,action){
    if(action.type==='CREATE_EVENT'){
        return {
            tasks: action.payload
        };
    }
    return state;
}

export function userReducer(state='',action){
    
}