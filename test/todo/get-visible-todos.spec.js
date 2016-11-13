const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
    }
};

test.only('returns all todos when receives SHOW_ALL filter', () => {
    const allTodos = [{
        completed: false
    },{
        completed: true
    }];
    const todos = getVisibleTodos(allTodos, 'SHOW_ALL');
    expect(todos).toEqual(allTodos);
});
