import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import reducer from '../../../src/reducer/app';
import VisibleTodoList from '../../../src/todo/components/visible-todo-list';

const render = ({
    store = createStore(reducer)
} = {}) => {
    return mount(<VisibleTodoList store={store} />);
}

test('renders a TodoList component', () => {
    const visibleTodoList = render();
    expect(visibleTodoList.find('TodoList').length).toBe(1);
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

test('provides onClick handler for toggling todos', () => {
    const store = createStore(reducer);
    const visibleTodoList = render({ store });
    const todoList = visibleTodoList.find('TodoList');
    store.dispatch = jest.fn();
    const onClick = todoList.prop('onClick');
    onClick();
    expect(store.dispatch).toBeCalledWith({
        type: 'TOGGLE_TODO',
        undefined
    });
});

test('subscribes to store changes', () => {
    const store = createStore(reducer);
    store.subscribe = jest.fn();
    const visibleTodoList = render({ store });
    expect(store.subscribe).toBeCalled();
});

test('is updated on store changes', () => {
    VisibleTodoList.prototype.forceUpdate = jest.fn();
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo', id: 0 });
    const visibleTodoList = render({ store });
    store.dispatch({
        type: 'TOGGLE_TODO',
        id: 0
    });
    expect(VisibleTodoList.prototype.forceUpdate).toBeCalled();
});
