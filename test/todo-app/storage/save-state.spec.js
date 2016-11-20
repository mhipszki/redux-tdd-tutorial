const saveState = (state, storage) => {
    try {
        storage.setItem(state);
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
