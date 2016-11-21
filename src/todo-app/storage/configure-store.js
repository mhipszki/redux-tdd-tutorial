import { createStore } from 'redux';
import appReducer from '../reducers/app';
import loadState from './load-state';
import saveState from './save-state';

const configureStore = (storage) => {
    const persistedState = loadState(storage);
    const store = createStore(appReducer, persistedState);
    store.subscribe(() => {
        const state = {
            todos: store.getState().todos
        };
        saveState(state, storage);
    });
    return store;
};

export default configureStore;
