import React from 'react';
import { shallow } from 'enzyme';
import VisibleTodoList from '../../../src/todo/components/visible-todo-list';

test('renders a TodoList component', () => {
    const list = shallow(<VisibleTodoList/>);
    expect(list.type().name).toEqual('TodoList');
});
