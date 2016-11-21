import configureStore from '../../../src/todo-app/storage/configure-store';

test('returns a store instance with default state', () => {
    const store = configureStore();
    expect(store.getState()).toEqual({
        todos: [],
        visibilityFilter: 'SHOW_ALL'
    });
});
