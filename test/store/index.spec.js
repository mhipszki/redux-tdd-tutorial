import { createStore } from '../../src/store';

const exampleReducer = (state = 'initial state', action) => {
    return state;
};

test('initialises state when created', () => {
    const store = createStore(exampleReducer);
    expect(store.getState()).toBe('initial state');
});
