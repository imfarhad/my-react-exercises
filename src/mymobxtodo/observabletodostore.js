import React from 'react';
import { observable, computed, mobx } from 'mobx';

class ObservableTodoStore {

    @observable todos = [];
    @observable pendingRequests = 0;

    constructor(){
        mobx.autorun(()=>console.log(this.report));
    }

    @computed get completedTodosCount(){
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed report(){
        if(this.todos.length===0)
            return "<none>";
        return `Next todo: "${this.todos[0].task}". `+
                `Progress: ${this.completedTodosCount}/${this.todos.length} `
    }

    addTodo(task){
        this.todos.push({
            task:task,
            completed: false,
            assignee: null
        });
    }

}

export const observableTodoStore = new ObservableTodoStore();

/*
observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "try MobX in own Project";
observableTodoStore.todos[0].task = "grok MobX tutorial";
*/