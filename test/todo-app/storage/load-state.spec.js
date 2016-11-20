const loadState = (storage) => {
    try {
        const state = storage.getItem('state');
        if (state === null) {
            return undefined;
        }
        return state;
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

test('returns undefined when state has not been saved to storage', () => {
    const fakeLocalStorage = {
        getItem: () => null
    };
    const state = loadState(fakeLocalStorage);
    expect(state).toBe(undefined);
});
