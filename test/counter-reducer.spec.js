const counter = (state, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    } else if (action.type === 'DECREMENT') {
        return state - 1;
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
