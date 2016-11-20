const loadState = (storage) => {
    try {
        const serializedState = storage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

export default loadState;
