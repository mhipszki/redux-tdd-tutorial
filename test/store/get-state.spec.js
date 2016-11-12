import { createStore } from '../../src/store';

test('method is exposed', () => {
    const reducer = () => {};
    const store = createStore(reducer);
    expect(store.getState()).toBe(undefined);
});
