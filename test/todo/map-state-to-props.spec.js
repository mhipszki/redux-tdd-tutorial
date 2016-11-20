import getVisibleTodos from '../../src/todo/get-visible-todos';

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

test('returns visible todos', () => {
    const state = {
        todos: [{
            completed: false
        },{
            completed: true
        }],
        visibilityFilter: 'SHOW_COMPLETED'
    }
    const props = mapStateToProps(state);
    expect(props.todos).toEqual([{
        completed: true
    }]);
});
