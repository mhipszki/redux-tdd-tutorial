import React from 'react';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import Footer from './footer';

let nextTodoId = 0;

const TodoApp = ({ store }) => {
    const addTodo = (text) => {
        store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
        });
    };
    return (
        <div>
            <AddTodo onAddClick={addTodo} />
            <VisibleTodoList store={store} />
            <Footer store={store} />
        </div>
    );
};

export default TodoApp;
