import React from 'react';
import FilterLink from './filter-link';

let nextTodoId = 0;

const TodoApp = ({ store }) => {
    let input = null;
    const onClick = () => {
        store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value
        });
        input.value = '';
    };
    const toggleTodo = (id) => () => {
        store.dispatch({
            type: 'TOGGLE_TODO',
            id: id
        });
    };
    const todoStyle = (completed) => ({
        textDecoration: completed ? 'line-through' : 'none'
    });
    const todos = store.getState().todos.map(todo => (
        <li
            key={todo.id}
            onClick={toggleTodo(todo.id)}
            style={todoStyle(todo.completed)}
        >{todo.text}</li>
    ));
    return (
        <div>
            <input ref={node => input = node} />
            <button onClick={onClick}>Add todo</button>
            <ul>
                {todos}
            </ul>
            <p>
                <FilterLink store={store} filter="SHOW_ALL">All</FilterLink>
            </p>
        </div>
    );
};

export default TodoApp;
