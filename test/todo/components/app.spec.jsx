import React from 'react';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import TodoApp from '../../../src/todo/components/app'
import reducer from '../../../src/reducer/app';
import getVisibleTodos from '../../../src/todo/get-visible-todos';

test('has an input to add todos', () => {
    const store = createStore(reducer);
    const app = shallow(<TodoApp store={store} />);
    expect(app.find('input').length).toBe(1);
});

test('renders a button to add todos', () => {
    const store = createStore(reducer);
    const app = shallow(<TodoApp store={store} />);
    const button = app.find('button');
    expect(button.render().text()).toBe('Add todo');
});

test('adds a new todo each time the button is clicked', () => {
    const store = createStore(reducer);
    const app = mount(<TodoApp store={store} />);
    const input = app.find('input');
    const button = app.find('button');
    input.node.value = 'New Todo';
    button.simulate('click');
    input.node.value = 'Another Todo';
    button.simulate('click');
    expect(store.getState().todos).toEqual([{
        id: 0,
        text: 'New Todo',
        completed: false
    },{
        id: 1,
        text: 'Another Todo',
        completed: false
    }]);
});

test('clears input after adding a todo', () => {
    const store = createStore(reducer);
    const app = mount(<TodoApp store={store} />);
    const input = app.find('input');
    const button = app.find('button');
    input.node.value = 'New Todo';
    button.simulate('click');
    expect(input.node.value).toEqual('');
});

test('renders the visible list of todos', () => {
    const store = createStore(reducer);
    const app = shallow(<TodoApp store={store} />);
    const todoList = app.find('TodoList');
    const { todos, visibilityFilter } = store.getState();
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    expect(todoList.prop('todos')).toBe(visibleTodos);
});

test('shows a filter link to show all todos', () => {
    const store = createStore(reducer);
    const currentFilter = store.getState().visibilityFilter;
    const app = shallow(<TodoApp store={store} />);
    const link = app.find('FilterLink').at(0);
    expect(link.prop('store')).toBe(store);
    expect(link.prop('filter')).toEqual('SHOW_ALL');
    expect(link.prop('currentFilter')).toEqual(currentFilter);
    expect(link.render().text()).toEqual('All');
});

test('shows a filter link to show active todos', () => {
    const store = createStore(reducer);
    const currentFilter = store.getState().visibilityFilter;
    const app = shallow(<TodoApp store={store} />);
    const link = app.find('FilterLink').at(1);
    expect(link.prop('store')).toBe(store);
    expect(link.prop('filter')).toEqual('SHOW_ACTIVE');
    expect(link.prop('currentFilter')).toEqual(currentFilter);
    expect(link.render().text()).toEqual('Active');
});

test('shows a filter link to show completed todos', () => {
    const store = createStore(reducer);
    const currentFilter = store.getState().visibilityFilter;
    const app = shallow(<TodoApp store={store} />);
    const link = app.find('FilterLink').at(2);
    expect(link.prop('store')).toBe(store);
    expect(link.prop('filter')).toEqual('SHOW_COMPLETED');
    expect(link.prop('currentFilter')).toEqual(currentFilter);
    expect(link.render().text()).toEqual('Completed');
});

test('shows all todos when Show All filter is selected', () => {
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo 1', id: 0 });
    store.dispatch({ type: 'ADD_TODO', text: 'todo 2', id: 1 });
    store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
    const app = mount(<TodoApp store={store} />);
    const showAll = app.find('FilterLink').at(0);
    showAll.simulate('click');
    app.update();
    expect(app.find('li').length).toBe(2);
});

test('shows active todos when Show Active filter is selected', () => {
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo 1', id: 0 });
    store.dispatch({ type: 'ADD_TODO', text: 'todo 2', id: 1 });
    store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
    const app = mount(<TodoApp store={store} />);
    const showActive = app.find('FilterLink').at(1);
    showActive.simulate('click');
    app.update();
    expect(app.find('li').length).toBe(1);
    expect(app.find('li').render().text()).toBe('todo 1');
});

test('shows completed todos when Show Completed filter is selected', () => {
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo 1', id: 0 });
    store.dispatch({ type: 'ADD_TODO', text: 'todo 2', id: 1 });
    store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
    const app = mount(<TodoApp store={store} />);
    const showCompleted = app.find('FilterLink').at(2);
    showCompleted.simulate('click');
    app.update();
    expect(app.find('li').length).toBe(1);
    expect(app.find('li').render().text()).toBe('todo 2');
});
