import { createStore } from '../../src/store';

const exampleReducer = (state = 'initial state', action) => {
    return action === 'update' ? 'updated state' : state;
};

test('updates state', () => {
    const store = createStore(exampleReducer);
    expect(store.getState()).toBe('initial state');
    store.dispatch('update');
    expect(store.getState()).toBe('updated state');
});
