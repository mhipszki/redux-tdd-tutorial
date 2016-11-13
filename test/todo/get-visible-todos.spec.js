import getVisibleTodos from '../../src/todo/get-visible-todos';

test('returns all todos when receives SHOW_ALL filter', () => {
    const allTodos = [{
        completed: false
    },{
        completed: true
    }];
    const todos = getVisibleTodos(allTodos, 'SHOW_ALL');
    expect(todos).toEqual(allTodos);
});

test('returns completed todos when receives SHOW_COMPLETED filter', () => {
    const allTodos = [{
        completed: false
    },{
        completed: true
    }];
    const todos = getVisibleTodos(allTodos, 'SHOW_COMPLETED');
    expect(todos).toEqual([{
        completed: true
    }]);
});

test('returns active todos when receives SHOW_ACTIVE filter', () => {
    const allTodos = [{
        completed: false
    },{
        completed: true
    }];
    const todos = getVisibleTodos(allTodos, 'SHOW_ACTIVE');
    expect(todos).toEqual([{
        completed: false
    }]);
});
