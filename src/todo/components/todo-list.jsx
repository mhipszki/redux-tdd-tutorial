import React from 'react';
import Todo from './todo';

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id}/>
        )}
    </ul>
);

export default TodoList;
