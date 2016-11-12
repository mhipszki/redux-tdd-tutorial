const createStore = () => {
    const getState = () => {};
    return { getState };
};

test('method is exposed', () => {
    const store = createStore();
    expect(store.getState()).toBe(undefined);
});
