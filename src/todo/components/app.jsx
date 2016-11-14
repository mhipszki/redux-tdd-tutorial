import React from 'react';
import FilterLink from './filter-link';
import TodoList from './todo-list';
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
    const toggleTodo = id => {
        store.dispatch({
            type: 'TOGGLE_TODO',
            id: id
        });
    };
    const visibleTodos = getVisibleTodos(
        store.getState().todos,
        store.getState().visibilityFilter
    );
    const currentFilter = store.getState().visibilityFilter;
    return (
        <div>
            <input ref={node => input = node} />
            <button onClick={onClick}>Add todo</button>
            <TodoList todos={visibleTodos} onTodoClick={toggleTodo} />
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
