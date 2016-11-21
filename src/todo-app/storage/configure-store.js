import { createStore } from 'redux';
import appReducer from '../reducers/app';

const configureStore = () => {
    return createStore(appReducer);
};

export default configureStore;
