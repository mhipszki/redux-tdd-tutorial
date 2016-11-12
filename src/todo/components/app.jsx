import React from 'react';

const TodoApp = ({ store }) => {
    let nextTodoId = 0;
    const onClick = () => {
        store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: 'Test'
        });
    };
    return (
        <div>
            <button onClick={onClick}>Add todo</button>
        </div>
    );
};

export default TodoApp;
