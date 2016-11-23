import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Provider from './provider';
import TodoApp from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={TodoApp} />
        </Router>
    </Provider>
);

export default Root;
