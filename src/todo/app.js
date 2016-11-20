import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import appReducer from '../reducer/app';
import Provider from './components/provider';
import TodoApp from './components/app';

const store = createStore(appReducer);
const app = (
    <Provider store={store}>
        <TodoApp/>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
