import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/app';
import TodoApp from './components/app';
import { loadState, saveState } from './storage';

const persistedState = loadState(localStorage);

const store = createStore(appReducer, persistedState);

store.subscribe(() => {
    const state = {
        todos: store.getState().todos
    };
    saveState(state, localStorage);
});

const app = (
    <Provider store={store}>
        <TodoApp/>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
