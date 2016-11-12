import app from '../../src/reducer/app';
import deepFreeze from 'deep-freeze';

test('sets initial state', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = {
        todos: [],
        visibilityFilter: 'SHOW_ALL'
    };
    deepFreeze(action);
    expect(app(stateBefore, action)).toEqual(stateAfter);
});
