const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

test('increments state', () => {
    expect(counter(0, { type: 'INCREMENT' })).toBe(1);
    expect(counter(1, { type: 'INCREMENT' })).toBe(2);
});

test('decrements state', () => {
    expect(counter(2, { type: 'DECREMENT' })).toBe(1);
    expect(counter(1, { type: 'DECREMENT' })).toBe(0);
});

test('returns current state when receives unknown action type', () => {
    expect(counter(0, { type: 'UNKNOWN' })).toBe(0);
});

test('returns inital state when receives undefined state', () => {
    expect(counter(undefined, {})).toBe(0);
});
