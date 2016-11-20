import setVisibilityFilter from '../../../action-creator/set-visibility-filter';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

export default mapDispatchToProps;
