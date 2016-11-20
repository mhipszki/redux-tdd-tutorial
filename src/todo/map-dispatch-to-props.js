const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick(id) {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            });
        }
    };
};

export default mapDispatchToProps;
