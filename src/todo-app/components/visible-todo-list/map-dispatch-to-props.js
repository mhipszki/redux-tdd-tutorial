import { toggleTodo } from '../../action-creators';

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id));
    }
});

export default mapDispatchToProps;
