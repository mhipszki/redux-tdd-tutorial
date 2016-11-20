import { setVisibilityFilter } from '../../action-creators';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

export default mapDispatchToProps;
