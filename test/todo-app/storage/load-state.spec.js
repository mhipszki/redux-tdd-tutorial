const loadState = (storage) => {
    try {
        return storage.getItem('state');
    } catch (e) {
        return undefined;
    }
};

test('returns undefined when storage is not accessible', () => {
    const fakeLocalStorage = {
        getItem: 'inaccessible'
    };
    const state = loadState(fakeLocalStorage);
    expect(state).toBe(undefined);
});
