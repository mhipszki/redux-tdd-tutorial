import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import TodoApp from '../../../src/todo/components/app'
import reducer from '../../../src/reducer/app';

test('toggles completed on click', () => {
    const store = createStore(reducer);
    const app = mount(<TodoApp store={store} />);
    const input = app.find('input');
    const button = app.find('button');
    input.node.value = 'New Todo';
    button.simulate('click');
    app.update();
    const todo = app.find('li').first();
    todo.simulate('click');
    const todos = store.getState().todos;
    expect(todos[0].completed).toBe(true);
});
