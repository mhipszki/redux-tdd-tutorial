const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.visibilityFilter
    }
};

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
