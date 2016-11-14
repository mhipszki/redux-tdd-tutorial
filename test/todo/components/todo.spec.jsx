import React from 'react';
import { shallow } from 'enzyme';

const Todo = ({ onClick, text }) => (
    <li onClick={onClick}>{text}</li>
);

test('renders a list element', () => {
    const todo = shallow(<Todo/>);
    expect(todo.type()).toBe('li');
});

test('handles click event', () => {
    const onClick = jest.fn();
    const todo = shallow(<Todo onClick={onClick}/>);
    todo.simulate('click');
    expect(onClick).toBeCalled();
});

test('renders given text', () => {
    const todo = shallow(<Todo text="todo"/>);
    expect(todo.render().text()).toEqual('todo');
});
