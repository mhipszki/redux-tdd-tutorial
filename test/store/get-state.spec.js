import { createStore } from '../../src/store';

test('method is exposed', () => {
    const store = createStore();
    expect(store.getState()).toBe(undefined);
});
