import todos from '../../../src/todo-app/reducers/todos';
import deepFreeze from 'deep-freeze';

test('can add a todo to the list', () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'first thing to do'
    };
    const stateAfter = [{
        id: 0,
        text: 'first thing to do',
        completed: false
    }];
    deepFreeze(stateBefore)
    deepFreeze(action);
    expect(todos(stateBefore, action)).toEqual(stateAfter);
});

test('can toggle a todo', () => {
    const stateBefore = [{
        id: 0,
        text: 'todo 1',
        completed: false
    }, {
        id: 1,
        text: 'todo 2',
        completed: false
    }];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    const stateAfter = [{
        id: 0,
        text: 'todo 1',
        completed: false
    }, {
        id: 1,
        text: 'todo 2',
        completed: true
    }];
    deepFreeze(stateBefore)
    deepFreeze(action);
    expect(todos(stateBefore, action)).toEqual(stateAfter);
});
