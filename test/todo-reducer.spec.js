import deepFreeze from 'deep-freeze';

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        default:
            return state;
    }
};

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
