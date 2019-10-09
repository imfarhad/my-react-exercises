export function updateUser(newUser, randomProp){
    return {
        type: 'updateUser',
        payload:{
            user: newUser+' '+randomProp
        }
    }
}