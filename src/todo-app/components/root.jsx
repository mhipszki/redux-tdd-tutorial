import React from 'react';
import Provider from './provider';

const Root = ({ store }) => (
    <Provider store={store}></Provider>
);

export default Root;
