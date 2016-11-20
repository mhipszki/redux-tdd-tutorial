import { setVisibilityFilter } from '../../../src/todo-app/action-creators';

test('returns a SET_VISIBILITY_FILTER action with given filter', () => {
    const action = setVisibilityFilter('filter');
    expect(action).toEqual({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'filter'
    });
});
