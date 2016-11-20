import setVisibilityFilter from '../../action-creators/set-visibility-filter';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

export default mapDispatchToProps;
