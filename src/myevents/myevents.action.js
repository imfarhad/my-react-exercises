let _id = 1;
export function uniqueId(){
    return _id++;
}

export function createEvent({event}){
    return{
        type: 'CREATE_EVENT',
        payload: {
            id: uniqueId(),
            event,
        },
    };
}