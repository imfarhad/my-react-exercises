const INITIAL_STATE = {
    route: 'home',
    albums: ['Hello']
}

export const MyAlbumReducer = (state=INITIAL_STATE, action) =>{
    if(action.type === 'ADD_ALBUM') {
        return {
            route : action.payload.route,
            albums : [...state.albums]    
        }
    }
    if(action.type === 'CREATE_ALBUM') {
        return {
            route : action.payload.route,
            albums : [...state.albums, action.payload.album]    
        }
    }
    return state;
}