import React from 'react';
import Link from './link';

const FilterLink = ({ filter, store, children }) => {
    const currentFilter = store.getState().visibilityFilter;
    const active = filter === currentFilter;
    return (
        <Link active={active}>{children}</Link>
    );
};

export default FilterLink;
