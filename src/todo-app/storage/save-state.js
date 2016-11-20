const saveState = (state, storage) => {
    try {
        const serializedState = JSON.stringify(state);
        storage.setItem('state', serializedState);
    } catch (e) {
        // ignore write errors
    }
};

export default saveState;
