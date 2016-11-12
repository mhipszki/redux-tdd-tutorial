import { createStore } from '../../src/store';

test('subscribes a listener to state changes', () => {
    const listener = jest.fn();
    const reducer = () => {};
    const store = createStore(reducer);
    store.subscribe(listener);
    store.dispatch();
    expect(listener).toBeCalled();
});

test('returns a function to unsubscribe listener', () => {
    const listeners = [ jest.fn(()=>1), jest.fn(()=>2) ];
    const reducer = () => {};
    const store = createStore(reducer);
    const unsubscribe = store.subscribe(listeners[0]);
    store.subscribe(listeners[1]);
    store.dispatch();
    expect(listeners[0]).toBeCalled();
    expect(listeners[1]).toBeCalled();
    jest.clearAllMocks();
    unsubscribe();
    store.dispatch();
    expect(listeners[0]).not.toBeCalled();
    expect(listeners[1]).toBeCalled();
});
