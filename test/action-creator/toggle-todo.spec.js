import toggleTodo from '../../src/action-creator/toggle-todo';

test('returns an action to toggle a todo by a given id', () => {
    const action = toggleTodo('todo id');
    expect(action).toEqual({
        type: 'TOGGLE_TODO',
        id: 'todo id'
    })
});
