import React from 'react';

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
    const todos = store.getState().todos.map(todo => (
        <li
            key={todo.id}
            onClick={() => {
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                });
            }}
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
            }}
        >{todo.text}</li>
    ));
    return (
        <div>
            <input ref={node => input = node} />
            <button onClick={onClick}>Add todo</button>
            <ul>
                {todos}
            </ul>
        </div>
    );
};

export default TodoApp;
