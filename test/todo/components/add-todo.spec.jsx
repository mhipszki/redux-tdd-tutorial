import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '../../../src/todo/components/add-todo';

test('renders a text input', () => {
    const addTodo = shallow(<AddTodo/>);
    const input = addTodo.find('input');
    expect(input.type()).toEqual('input');
});

test('renders a button to add a new todo', () => {
    const addTodo = shallow(<AddTodo/>);
    const button = addTodo.find('button');
    expect(button.type()).toEqual('button');
    expect(button.render().text()).toEqual('Add Todo');
});

test('calls callback with input value when button is clicked', () => {
    const onAddClick = jest.fn();
    const addTodo = mount(<AddTodo onAddClick={onAddClick} />);
    const input = addTodo.find('input');
    const button = addTodo.find('button');
    input.node.value = 'new todo';
    button.simulate('click');
    expect(onAddClick).toBeCalledWith('new todo');
});
