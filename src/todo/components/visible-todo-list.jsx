import React from 'react';
import TodoList from './todo-list';
import getVisibleTodos from '../get-visible-todos';

class VisibleTodoList extends React.Component {
    render() {
        const { store } = this.props;
        const { todos, visibilityFilter } = store.getState();
        const visibleTodos = getVisibleTodos(todos, visibilityFilter);
        const toggleTodo = id => {
            store.dispatch({
                type: 'TOGGLE_TODO',
                id
            })
        }
        return (
            <TodoList todos={visibleTodos} onClick={toggleTodo} />
        );
    }
}

export default VisibleTodoList;
