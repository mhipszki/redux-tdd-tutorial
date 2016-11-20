import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../../../src/todo-app/components/todo';

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

test('is not crossed when not completed', () => {
    const todo = shallow(<Todo completed={false}/>);
    expect(todo.prop('style').textDecoration).toBe('none');
});

test('is crossed when completed', () => {
    const todo = shallow(<Todo completed={true}/>);
    expect(todo.prop('style').textDecoration).toBe('line-through');
});
