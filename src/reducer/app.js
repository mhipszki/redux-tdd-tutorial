import todos from './todos';
import visibilityFilter from './visibility-filter';

const app = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
};

export default app;
