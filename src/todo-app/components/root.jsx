import React from 'react';
import Provider from './provider';
import TodoApp from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <TodoApp/>
    </Provider>
);

export default Root;
