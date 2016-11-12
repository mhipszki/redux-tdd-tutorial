import deepFreeze from 'deep-freeze';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
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
