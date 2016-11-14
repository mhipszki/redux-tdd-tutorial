import React from 'react';
import { shallow } from 'enzyme';

const AddTodo = () => (
    <input/>
);

test('renders a text input', () => {
    const addTodo = shallow(<AddTodo/>);
    const input = addTodo.find('input');
    expect(input.type()).toEqual('input');
});
