import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import TodoApp from '../../../src/todo/components/app'
import todos from '../../../src/reducer/todos';

test('renders a button to add todos', () => {
    const app = shallow(<TodoApp/>);
    const button = app.find('button');
    expect(button.render().text()).toBe('Add todo');
});

test('adds a new todo when the button is clicked', () => {
    const store = createStore(todos);
    const app = shallow(<TodoApp store={store} />);
    const button = app.find('button');
    button.simulate('click');
    expect(store.getState()).toEqual([{
        id: 0,
        text: 'Test',
        completed: false
    }]);
});

test('adds a new todo each time the button is clicked', () => {
    const store = createStore(todos);
    const app = shallow(<TodoApp store={store} />);
    const button = app.find('button');
    button.simulate('click');
    button.simulate('click');
    expect(store.getState()).toEqual([{
        id: 0,
        text: 'Test',
        completed: false
    },{
        id: 1,
        text: 'Test',
        completed: false
    }]);
});
