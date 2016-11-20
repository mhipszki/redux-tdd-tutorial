import mapDispatchToProps from
'../../../../src/todo/components/filter-link/map-dispatch-to-props';

test('returns an object with onClick method to select filter', () => {
    const dispatch = jest.fn();
    const ownProps = {
        filter: 'selected filter'
    };
    const props = mapDispatchToProps(dispatch, ownProps);
    const { onClick } = props;
    onClick();
    expect(dispatch).toBeCalledWith({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'selected filter'
    });
});
