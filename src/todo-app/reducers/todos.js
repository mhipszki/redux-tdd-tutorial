import todo from './todo';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => {
                if (t.id !== action.id) {
                    return t;
                }
                return todo(t, action);
            });
        default:
            return state;
        }
};

export default todos;
