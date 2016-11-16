import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import reducer from '../../../src/reducer/app';
import VisibleTodoList from '../../../src/todo/components/visible-todo-list';

const render = ({
    store = createStore(reducer)
} = {}) => {
    return shallow(<VisibleTodoList store={store} />);
}

test('renders a TodoList component', () => {
    const visibleTodoList = render();
    expect(visibleTodoList.type().name).toEqual('TodoList');
});

test('retrieves visible todos and passes them to TodoList', () => {
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo 1', id: 0 });
    store.dispatch({ type: 'ADD_TODO', text: 'todo 2', id: 1 });
    store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
    store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' });
    const visibleTodoList = render({ store });
    const todoList = visibleTodoList.find('TodoList');
    expect(todoList.prop('todos')).toEqual([{
        id: 1,
        text: 'todo 2',
        completed: true
    }]);
});
