import React from 'react';
import TodoList from './todo-list';
import getVisibleTodos from '../get-visible-todos';

class VisibleTodoList extends React.Component {
    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
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
            <TodoList todos={visibleTodos} onTodoClick={toggleTodo} />
        );
    }
}

export default VisibleTodoList;
