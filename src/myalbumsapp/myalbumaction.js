export const myAlbumAction = (route) =>{
    return {
        type: 'ADD_ALBUM',
        payload: {
            route: route
        }
    }
}

export const myCreateAlbumAction = (album) =>{
    return{
        type: 'CREATE_ALBUM',
        payload: {
            route: 'home',
            album: album
        }
    }
}