import React from 'react';

let nextTodoId = 0;

const TodoApp = ({ store }) => {
    const onClick = () => {
        store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: 'Test'
        });
    };
    const todos = store.getState().todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
    ));
    return (
        <div>
            <button onClick={onClick}>Add todo</button>
            <ul>
                {todos}
            </ul>
        </div>
    );
};

export default TodoApp;
