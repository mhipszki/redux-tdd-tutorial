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

test('combined reducer updates given part of state', () => {
    const stateBefore = {
        one: 1,
        two: 2
    };
    const action = {
        type: 'INCREASE_ONE'
    };
    const stateAfter = {
        one: 2,
        two: 2
    };
    const one = (state = 1, action) => {
        switch (action.type) {
            case 'INCREASE_ONE':
                return state + 1;
            default:
                return state;
        }
    };
    const two = (state = 2, action) => state;
    const reducer = combineReducers({ one, two });
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
});

test('can combine multiple levels of reducers', () => {
    const stateBefore = {};
    const action = {};
    const stateAfter = {
        one: 1,
        two: {
            three: 3,
            four: 4
        }
    };
    const one = (state = 1, action) => state;
    const three = (state = 3, action) => state;
    const four = (state = 4, action) => state;
    const two = combineReducers({ three, four });
    const reducer = combineReducers({ one, two });
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
});
