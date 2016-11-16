import React from 'react';
import TodoList from './todo-list';
import getVisibleTodos from '../get-visible-todos';

class VisibleTodoList extends React.Component {
    render() {
        const { store } = this.props;
        const { todos, visibilityFilter } = store.getState();
        const visibleTodos = getVisibleTodos(todos, visibilityFilter);
        return (
            <TodoList todos={visibleTodos} />
        );
    }
}

export default VisibleTodoList;
