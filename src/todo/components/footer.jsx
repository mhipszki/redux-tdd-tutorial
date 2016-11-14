import React from 'react';
import FilterLink from './filter-link';

const Footer = ({ store, currentFilter }) => (
    <p>
        Show
        {' '}
        <FilterLink
            store={store}
            filter="SHOW_ALL"
            currentFilter={currentFilter}
        >All</FilterLink>
        {' '}
        <FilterLink
            store={store}
            filter="SHOW_ACTIVE"
            currentFilter={currentFilter}
        >Active</FilterLink>
        {' '}
        <FilterLink
            store={store}
            filter="SHOW_COMPLETED"
            currentFilter={currentFilter}
        >Completed</FilterLink>
    </p>
);

export default Footer;
