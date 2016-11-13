import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import TodoApp from '../../../src/todo/components/app'
import reducer from '../../../src/reducer/app';

let store;
let app;
let todo;

beforeEach(() => {
    store = createStore(reducer);
    app = mount(<TodoApp store={store} />);
    store.dispatch({
        type: 'ADD_TODO',
        id: 0,
        text: 'new todo'
    });
    app.update();
    todo = app.find('li').first();
});

test('toggles completed on click', () => {
    todo.simulate('click');
    const todos = store.getState().todos;
    expect(todos[0].completed).toBe(true);
});

test('is crossed when completed', () => {
    expect(todo.prop('style').textDecoration).toBe('none');
    todo.simulate('click');
    app.update();
    expect(todo.prop('style').textDecoration).toBe('line-through');
});
