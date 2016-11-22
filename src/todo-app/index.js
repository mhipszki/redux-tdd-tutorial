import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './storage/configure-store';

const store = configureStore(window.localStorage);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
