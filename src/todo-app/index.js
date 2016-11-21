import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './components/app';
import configureStore from './storage/configure-store';

const store = configureStore(window.localStorage);

const app = (
    <Provider store={store}>
        <TodoApp/>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
