import getVisibleTodos from './get-visible-todos';

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

export default mapStateToProps;
