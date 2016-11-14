import React from 'react';
import { shallow } from 'enzyme';

const Todo = () => (
    <li></li>
);

test('renders a list element', () => {
    const todo = shallow(<Todo/>);
    expect(todo.type()).toBe('li');
});
