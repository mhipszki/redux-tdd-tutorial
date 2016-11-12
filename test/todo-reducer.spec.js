import todo from '../src/todo-reducer';
import deepFreeze from 'deep-freeze';

test('can create a new todo', () => {
    const stateBefore = undefined;
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'new todo'
    };
    const stateAfter = {
        id: 0,
        text: 'new todo',
        completed: false
    };
    deepFreeze(action);
    expect(todo(stateBefore, action)).toEqual(stateAfter);
});

test('can toggle a todo', () => {
    const stateBefore = {
        id: 0,
        text: 'a todo',
        completed: false
    };
    const action = {
        type: 'TOGGLE_TODO'
    };
    const stateAfter = {
        id: 0,
        text: 'a todo',
        completed: true
    };
    deepFreeze(action);
    expect(todo(stateBefore, action)).toEqual(stateAfter);
});
