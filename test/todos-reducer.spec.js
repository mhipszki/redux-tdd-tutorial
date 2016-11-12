import deepFreeze from 'deep-freeze';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state;
        }
};

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
