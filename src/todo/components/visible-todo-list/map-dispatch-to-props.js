const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch({
            type: 'TOGGLE_TODO',
            id
        });
    }
});

export default mapDispatchToProps;
