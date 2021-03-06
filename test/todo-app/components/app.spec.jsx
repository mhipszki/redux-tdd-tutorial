import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import TodoApp from '../../../src/todo-app/components/app';
import reducer from '../../../src/todo-app/reducers/app';

const getMountOptions = ({
    store = createStore(reducer)
} = {}) => {
    const context = { store };
    const childContextTypes = {
        store: React.PropTypes.object
    };
    return { context, childContextTypes };
}

test('adds a new todo each time the button is clicked', () => {
    const store = createStore(reducer);
    const app = mount(<TodoApp/>, getMountOptions({ store}));
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
    const app = mount(<TodoApp/>, getMountOptions());
    expect(app.find('Connect(TodoList)').length).toBe(1);
});

test('toggles todos on click', () => {
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo', id: 0 });
    const app = mount(<TodoApp/>, getMountOptions({ store }));
    const todo = app.find('Todo');
    todo.simulate('click');
    expect(store.getState().todos[0].completed).toBe(true);
});

test('renders footer with filter links', () => {
    const app = mount(<TodoApp/>, getMountOptions());
    expect(app.find('Footer').length).toBe(1);
});

test('shows all todos when Show All filter is selected', () => {
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo 1', id: 0 });
    store.dispatch({ type: 'ADD_TODO', text: 'todo 2', id: 1 });
    store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
    const app = mount(<TodoApp/>, getMountOptions({ store }));
    const showAll = app.find('Connect(Link)').at(0);
    showAll.simulate('click');
    app.update();
    expect(app.find('li').length).toBe(2);
});

test('shows active todos when Show Active filter is selected', () => {
    const store = createStore(reducer);
    store.dispatch({ type: 'ADD_TODO', text: 'todo 1', id: 0 });
    store.dispatch({ type: 'ADD_TODO', text: 'todo 2', id: 1 });
    store.dispatch({ type: 'TOGGLE_TODO', id: 1 });
    const app = mount(<TodoApp/>, getMountOptions({ store }));
    const showActive = app.find('Connect(Link)').at(1);
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
    const app = mount(<TodoApp/>, getMountOptions({ store }));
    const showCompleted = app.find('Connect(Link)').at(2);
    showCompleted.simulate('click');
    app.update();
    expect(app.find('li').length).toBe(1);
    expect(app.find('li').render().text()).toBe('todo 2');
});
