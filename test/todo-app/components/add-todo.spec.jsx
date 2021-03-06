import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import reducer from '../../../src/todo-app/reducers/app';
import AddTodo from '../../../src/todo-app/components/add-todo';

const render = ({
    store = createStore(reducer)
} = {}) => {
    const context = { store };
    return mount(<AddTodo/>, { context });
}

test('renders a text input', () => {
    const addTodo = render();
    const input = addTodo.find('input');
    expect(input.type()).toEqual('input');
});

test('renders a button to add a new todo', () => {
    const addTodo = render();
    const button = addTodo.find('button');
    expect(button.type()).toEqual('button');
    expect(button.render().text()).toEqual('Add Todo');
});

test('adds a new todo when button is clicked', () => {
    const store = createStore(reducer);
    store.dispatch = jest.fn();
    const addTodo = render({ store });
    const input = addTodo.find('input');
    const button = addTodo.find('button');
    input.node.value = 'new todo';
    button.simulate('click');
    expect(store.dispatch).toBeCalledWith({
        type: 'ADD_TODO',
        id: 0,
        text: 'new todo'
    });
});

test('clears input when button is clicked', () => {
    const store = createStore(reducer);
    const addTodo = render({ store });
    const input = addTodo.find('input');
    const button = addTodo.find('button');
    input.node.value = 'new todo';
    button.simulate('click');
    expect(input.node.value).toEqual('');
});
