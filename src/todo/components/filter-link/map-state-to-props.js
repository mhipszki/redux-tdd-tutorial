const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.visibilityFilter
    }
};

export default mapStateToProps;
