import { createStore } from 'redux';
import appReducer from '../reducers/app';
import loadState from './load-state';

const configureStore = (storage) => {
    const persistedState = loadState(storage);
    return createStore(appReducer, persistedState);
};

export default configureStore;
