import addTodo from '../../src/action-creator/add-todo';

test('returns an ADD_TODO action with next id and text passed in', () => {
    const action = addTodo('todo');
    expect(action).toEqual({
        type: 'ADD_TODO',
        id: 0,
        text: 'todo'
    });
});

test('generates an incremental id for each new action created', () => {
    expect(addTodo('todo').id).toBe(1);
    expect(addTodo('another todo').id).toBe(2);
});
