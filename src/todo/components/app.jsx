import React from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import Footer from './footer';
import getVisibleTodos from '../get-visible-todos';

let nextTodoId = 0;

const TodoApp = ({ store }) => {
    const addTodo = (text) => {
        store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
        });
    };
    const toggleTodo = id => {
        store.dispatch({
            type: 'TOGGLE_TODO',
            id
        });
    };
    const visibleTodos = getVisibleTodos(
        store.getState().todos,
        store.getState().visibilityFilter
    );
    return (
        <div>
            <AddTodo onAddClick={addTodo} />
            <TodoList todos={visibleTodos} onTodoClick={toggleTodo} />
            <Footer store={store} />
        </div>
    );
};

export default TodoApp;
