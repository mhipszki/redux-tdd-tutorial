import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from '../reducer/app';
import TodoApp from './components/app';

const store = createStore(appReducer);
const app = (
    <Provider store={store}>
        <TodoApp/>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
