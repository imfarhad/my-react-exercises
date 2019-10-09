import React from 'react';
import {Provider} from 'react-redux';
import { myAlbumStore } from './myalbumstore';
import MyAlbumApp from './myalbumapp';

const MyAlbumMainApp = () =>{
    return(
        <Provider store={myAlbumStore}>
            <MyAlbumApp />
        </Provider>
    )
}

export default MyAlbumMainApp;