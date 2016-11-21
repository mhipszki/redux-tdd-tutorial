import configureStore from '../../../src/todo-app/storage/configure-store';

test('returns a store instance with default state', () => {
    const store = configureStore();
    expect(store.getState()).toEqual({
        todos: [],
        visibilityFilter: 'SHOW_ALL'
    });
});

test('loads todos from given storage if available', () => {
    const fakeLocalStorage = {
        getItem: () => JSON.stringify({
            todos: 'stored todos'
        })
    };
    const store = configureStore(fakeLocalStorage);
    expect(store.getState().todos).toEqual('stored todos');
});
