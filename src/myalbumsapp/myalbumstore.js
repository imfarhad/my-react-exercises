import { createStore } from 'redux';
import { MyAlbumReducer } from './myalbumreducer';

export const myAlbumStore = createStore(MyAlbumReducer);