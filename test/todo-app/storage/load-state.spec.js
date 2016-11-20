const loadState = (storage) => {
    try {
        const serializedState = storage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
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

test('returns state when found storage', () => {
    const fakeLocalStorage = {
        getItem: () => JSON.stringify({ app: 'state' })
    };
    const state = loadState(fakeLocalStorage);
    expect(state).toEqual({ app: 'state' });
});
