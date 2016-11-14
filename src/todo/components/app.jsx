import React from 'react';
import FilterLink from './filter-link';
import Todo from './todo';
import getVisibleTodos from '../get-visible-todos';

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
    const visibleTodos = getVisibleTodos(
        store.getState().todos,
        store.getState().visibilityFilter
    );
    const todos = visibleTodos.map(todo => (
        <Todo
            key={todo.id}
            onClick={toggleTodo(todo.id)}
            text={todo.text}
            completed={todo.completed}
        />
    ));
    const currentFilter = store.getState().visibilityFilter;
    return (
        <div>
            <input ref={node => input = node} />
            <button onClick={onClick}>Add todo</button>
            <ul>
                {todos}
            </ul>
            <p>
                Show
                {' '}
                <FilterLink
                    store={store}
                    filter="SHOW_ALL"
                    currentFilter={currentFilter}
                >All</FilterLink>
                {' '}
                <FilterLink
                    store={store}
                    filter="SHOW_ACTIVE"
                    currentFilter={currentFilter}
                >Active</FilterLink>
                {' '}
                <FilterLink
                    store={store}
                    filter="SHOW_COMPLETED"
                    currentFilter={currentFilter}
                >Completed</FilterLink>
            </p>
        </div>
    );
};

export default TodoApp;
