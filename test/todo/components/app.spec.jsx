import React from 'react';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import TodoApp from '../../../src/todo/components/app';
import reducer from '../../../src/reducer/app';
import getVisibleTodos from '../../../src/todo/get-visible-todos';

it('renders input and button to add a new todo', () => {
    const store = createStore(reducer);
    const app = shallow(<TodoApp store={store} />);
    const addTodo = app.find('AddTodo');
    expect(addTodo.length).toBe(1);
});

test('adds a new todo each time the button is clicked', () => {
    const store = createStore(reducer);
    const app = mount(<TodoApp store={store} />);
    const input = app.find('input');
    const button = app.find('button');
    input.node.value = 'New Todo';
    button.simulate('click');
    input.node.value = 'Another Todo';
    button.simulate('click');
    expect(store.getState().todos).toEqual([{
        id: 0,
        text: 'New Todo',
        completed: false
    },{
        id: 1,
        text: 'Another Todo',
        completed: false
    }]);
});

test('renders the visible list of todos', () => {
    const store = createStore(reducer);
    const app = shallow(<TodoApp store={store} />);
    const todoList = app.find('TodoList');
    const { todos, visibilityFilter } = store.getState();
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    expect(todoList.prop('todos')).toBe(visibleTodos);
});

test('toggles todos on click', () => {
    const store = createStore(reducer);
    const app = mount(<TodoApp store={store} />);
    const input = app.find('input');
    const button = app.find('button');
    input.node.value = 'New Todo';
    button.simulate('click');
    app.update();
    const todo = app.find('Todo');
    todo.simulate('click');
    expect(store.getState().todos[0].completed).toBe(true);
});

test('renders footer with filter links', () => {
    const store = createStore(reducer);
    const app = shallow(<TodoApp store={store} />);
    expect(app.find('Footer').length).toBe(1);
    const footer = app.find('Footer');
    const currentFilter = store.getState().visibilityFilter;
    expect(footer.prop('currentFilter')).toEqual(currentFilter);
});

test('shows all todos when Show All filter is selected', () => {
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo 1', id: 0 });
    store.dispatch({ type: 'ADD_TODO', text: 'todo 2', id: 1 });
    store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
    const app = mount(<TodoApp store={store} />);
    const showAll = app.find('FilterLink').at(0);
    showAll.simulate('click');
    app.update();
    expect(app.find('li').length).toBe(2);
});

test('shows active todos when Show Active filter is selected', () => {
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo 1', id: 0 });
    store.dispatch({ type: 'ADD_TODO', text: 'todo 2', id: 1 });
    store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
    const app = mount(<TodoApp store={store} />);
    const showActive = app.find('FilterLink').at(1);
    showActive.simulate('click');
    app.update();
    expect(app.find('li').length).toBe(1);
    expect(app.find('li').render().text()).toBe('todo 1');
});

test('shows completed todos when Show Completed filter is selected', () => {
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo 1', id: 0 });
    store.dispatch({ type: 'ADD_TODO', text: 'todo 2', id: 1 });
    store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
    const app = mount(<TodoApp store={store} />);
    const showCompleted = app.find('FilterLink').at(2);
    showCompleted.simulate('click');
    app.update();
    expect(app.find('li').length).toBe(1);
    expect(app.find('li').render().text()).toBe('todo 2');
});
