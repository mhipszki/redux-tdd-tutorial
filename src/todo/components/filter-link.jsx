import React from 'react';
import Link from './link';

const FilterLink = ({ filter, store, children }) => {
    const currentFilter = store.getState().visibilityFilter;
    const active = filter === currentFilter;
    const changeFilter = () => {
        store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
        })
    }
    return (
        <Link active={active} onClick={changeFilter}>{children}</Link>
    );
};

export default FilterLink;
