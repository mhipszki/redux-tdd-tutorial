import toggleTodo from '../../action-creators/toggle-todo';

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id));
    }
});

export default mapDispatchToProps;
