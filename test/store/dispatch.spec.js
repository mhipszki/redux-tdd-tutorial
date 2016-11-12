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

test('runs all listeners', () => {
    const listeners = [ jest.fn(), jest.fn() ];
    const store = createStore(exampleReducer);
    store.subscribe(listeners[0]);
    store.subscribe(listeners[1]);
    store.dispatch();
    expect(listeners[0]).toBeCalled();
    expect(listeners[1]).toBeCalled();
});
