import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../../src/todo/components/todo-list';

const render = ({ todos = [] } = {}) => {
    return shallow(
        <TodoList todos={todos}></TodoList>
    );
};

test('renders an unordered list', () => {
    const list = render();
    expect(list.type()).toEqual('ul');
});

test('renders a list of todos', () => {
    const todos = [{
        id: 0,
        text: 'todo 1'
    },{
        id: 1,
        text: 'todo 2'
    }];
    const list = render({ todos });
    const todoItems = list.find('Todo');
    expect(todoItems.length).toBe(2);
});

test('passes all properties of the todo to the rendered Todo item', () => {
    const todos = [{
        id: 0,
        text: 'todo 1'
    }];
    const list = render({ todos });
    const todo = list.find('Todo');
    expect(todo.prop('id')).toBe(0);
    expect(todo.prop('text')).toBe('todo 1');
});
