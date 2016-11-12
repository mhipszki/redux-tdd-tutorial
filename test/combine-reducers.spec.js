const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key],
                    action
                );
                return nextState;
            },
            {}
        );
    };
};

test('returns a function', () => {
    expect(typeof combineReducers()).toBe('function');
});

test('combined reducer sets initial state', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = {
        one: 1,
        two: 2
    };
    const one = (state = 1, action) => state;
    const two = (state = 2, action) => state;
    const reducer = combineReducers({ one, two });
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
});
