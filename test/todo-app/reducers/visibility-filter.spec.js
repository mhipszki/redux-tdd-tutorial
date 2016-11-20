import visibilityFilter from '../../../src/todo-app/reducers/visibility-filter';
import deepFreeze from 'deep-freeze';

test('sets initial state', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = 'SHOW_ALL';
    deepFreeze(action);
    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
});

test('can set visibility filter', () => {
    const stateBefore = 'SHOW_ALL';
    const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'filter'
    };
    const stateAfter = 'filter';
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
});
