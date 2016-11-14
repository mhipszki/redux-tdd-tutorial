import React from 'react';
import { shallow } from 'enzyme';

const Todo = () => (<li></li>);

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id}/>
        )}
    </ul>
);

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
