const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

export default mapStateToProps;
