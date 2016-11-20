const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: ownProps.filter
        });
    }
});

export default mapDispatchToProps;
