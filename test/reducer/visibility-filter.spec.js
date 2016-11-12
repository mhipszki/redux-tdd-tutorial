import deepFreeze from 'deep-freeze';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

test('sets initial state', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = 'SHOW_ALL';
    deepFreeze(action);
    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
});

test('can set visibility filter', () => {
    const stateBefore = 'SHOW_ALL';
    const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'filter'
    };
    const stateAfter = 'filter';
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
});
