const createStore = (reducer) => {
    let state;
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
    };
    return { getState, dispatch };
};

export default createStore;
