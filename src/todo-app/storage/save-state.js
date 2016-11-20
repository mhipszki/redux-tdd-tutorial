const saveState = (state, storage) => {
    try {
        const serializedState = JSON.stringify(state);
        storage.setItem(serializedState);
    } catch (e) {
        // ignore write errors
    }
};

export default saveState;
