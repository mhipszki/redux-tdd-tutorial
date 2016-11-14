import React from 'react';
import { shallow } from 'enzyme';

const AddTodo = () => (
    <div>
        <input/>
        <button>Add Todo</button>
    </div>
);

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
