import React from 'react';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import TodoApp from '../../../src/todo/components/app'
import reducer from '../../../src/reducer/app';

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

test('renders the list of todos', () => {
    const store = createStore(reducer);
    const app = mount(<TodoApp store={store} />);
    const addTodo = () => app.find('button').simulate('click');
    const list = () => app.find('li');

    addTodo();
    app.update();
    expect(list().length).toBe(1);

    addTodo();
    app.update();
    expect(list().length).toBe(2);
});

test('shows a filter link to show all todos', () => {
    const store = createStore(reducer);
    const app = shallow(<TodoApp store={store} />);
    const link = app.find('FilterLink').first();
    expect(link.prop('store')).toBe(store);
    expect(link.prop('filter')).toEqual('SHOW_ALL');
    expect(link.render().text()).toEqual('All');
});
