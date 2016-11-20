const saveState = (state, storage) => {
    try {
        const serializedState = JSON.stringify(state);
        storage.setItem(serializedState);
    } catch (e) {
        // ignore write errors
    }
};

test('gracefuly handles inaccessible storage', () => {
    const fakeLocalStorage = {
        setItem: 'inaccessible'
    };
    const save = () => {
        saveState({ app: 'state' }, fakeLocalStorage);
    }
    expect(save).not.toThrow();
});

test('stores serialized state to storage', () => {
    const fakeLocalStorage = {
        setItem: jest.fn()
    };
    saveState({ app: 'state' }, fakeLocalStorage);
    expect(fakeLocalStorage.setItem).toBeCalledWith(
        JSON.stringify({ app: 'state' })
    );
});
