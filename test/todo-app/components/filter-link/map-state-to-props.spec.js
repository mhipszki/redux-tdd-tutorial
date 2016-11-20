import mapStateToProps from
'../../../../src/todo-app/components/filter-link/map-state-to-props';

test('returns an object with active state of the link', () => {
    const state = {
        todos: [],
        visibilityFilter: 'SHOW_COMPLETED'
    };
    const ownProps = {
        filter: 'SHOW_COMPLETED'
    };
    const props = mapStateToProps(state, ownProps);
    expect(props.active).toBe(true);
});
