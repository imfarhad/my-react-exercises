import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import MyPhoneMainApp from './myphonesapp/myphonemainapp';

//import TodoApp from './todoapp/todoapp';
//import MyTodoApp from './mytodoapp/MyTodoApp'
//import MyBookApp from './mybookapp/mybookapp';
//import MyFriendApp from './myfriendapp/myfriendapp';
//import MyTaskApp from './mytaskapp/mytaskapp';
//import MyLessonsApp from './mylessonsapp/mylessonsapp';
//import Game from './tictactoe/game';

//import { ReduxApp } from './redux-tasklist/redux.app';
//import { ReduxTodoMainApp } from './myreduxtodo/reduxtodo.mainapp';

//import { MyEventMainApp } from './myevents/myeventmainapp';
//import MyAlbumMainApp from './myalbumsapp/myalbummainapp';

//import MyMobxTodoMainApp from './mymobxtodo/mymobxtodomainapp';

import CounterHook from './myhooktest/example';

import MyTechApp from './mytechtools/mytechapp';

ReactDOM.render(
    <MyTechApp />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();