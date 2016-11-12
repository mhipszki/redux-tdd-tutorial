const combineReducers = () => () => {};

test('returns a function', () => {
    expect(typeof combineReducers()).toBe('function');
});
