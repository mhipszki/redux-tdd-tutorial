import { createStore } from '../../src/store';

const exampleReducer = (state = 'initial state', action) => {
    return state;
};

test('updates state', () => {
    const store = createStore(exampleReducer);
    expect(store.getState()).toBe(undefined);
    store.dispatch();
    expect(store.getState()).toBe('initial state');
});
