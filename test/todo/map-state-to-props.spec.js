import mapStateToProps from '../../src/todo/map-state-to-props';

test('returns an object with a list of visible todos', () => {
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
