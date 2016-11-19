import React from 'react';
import TodoList from './todo-list';
import getVisibleTodos from '../get-visible-todos';

class VisibleTodoList extends React.Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { store } = this.context;
        const { todos, visibilityFilter } = store.getState();
        const visibleTodos = getVisibleTodos(todos, visibilityFilter);
        const toggleTodo = id => {
            store.dispatch({
                type: 'TOGGLE_TODO',
                id
            })
        }
        return (
            <TodoList todos={visibleTodos} onTodoClick={toggleTodo} />
        );
    }
}

VisibleTodoList.contextTypes = {
    store: React.PropTypes.object
};

export default VisibleTodoList;
