import mapDispatchToProps from
'../../../../src/todo/components/visible-todo-list/map-dispatch-to-props';

test('returns an object with onTodoClick method to toggle todos', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    const { onTodoClick } = props;
    onTodoClick('todo id');
    expect(dispatch).toBeCalledWith({
        type: 'TOGGLE_TODO',
        id: 'todo id'
    });
});
