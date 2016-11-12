import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import TodoApp from '../../../src/todo/components/app'
import reducer from '../../../src/reducer/app';

test('renders a button to add todos', () => {
    const store = createStore(reducer);
    const app = shallow(<TodoApp store={store} />);
    const button = app.find('button');
    expect(button.render().text()).toBe('Add todo');
});

test('adds a new todo when the button is clicked', () => {
    const store = createStore(reducer);
    const app = shallow(<TodoApp store={store} />);
    const button = app.find('button');
    button.simulate('click');
    expect(store.getState().todos).toEqual([{
        id: 0,
        text: 'Test',
        completed: false
    }]);
});

test('adds a new todo each time the button is clicked', () => {
    const store = createStore(reducer);
    const app = shallow(<TodoApp store={store} />);
    const button = app.find('button');
    button.simulate('click');
    button.simulate('click');
    expect(store.getState().todos).toEqual([{
        id: 1,
        text: 'Test',
        completed: false
    },{
        id: 2,
        text: 'Test',
        completed: false
    }]);
});

test('renders the list of todos', () => {
    let app;

    const store = createStore(reducer);
    const render = () => shallow(<TodoApp store={store} />);
    const addTodo = () => app.find('button').simulate('click');
    const list = () => app.find('li');

    app = render();

    addTodo();

    app = render();
    expect(list().length).toBe(1);

    addTodo();

    app = render();
    expect(list().length).toBe(2);
});
