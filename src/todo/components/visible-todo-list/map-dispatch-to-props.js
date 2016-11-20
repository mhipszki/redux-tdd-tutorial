import toggleTodo from '../../../action-creator/toggle-todo';

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id));
    }
});

export default mapDispatchToProps;
