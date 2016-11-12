import { createStore } from '../../src/store';

test('subscribes a listener to state changes', () => {
    const listener = jest.fn();
    const reducer = () => {};
    const store = createStore(reducer);
    store.subscribe(listener);
    store.dispatch();
    expect(listener).toBeCalled();
});
