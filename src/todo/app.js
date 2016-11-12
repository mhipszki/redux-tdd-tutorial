import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import appReducer from '../reducer/app';
import TodoApp from './components/app';

const store = createStore(appReducer);

const render = () => {
    ReactDOM.render(
        <TodoApp store={store}/>,
        document.getElementById('root')
    );
};

store.subscribe(render);

render();
