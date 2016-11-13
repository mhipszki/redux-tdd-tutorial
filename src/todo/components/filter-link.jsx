import React from 'react';

const FilterLink = ({ store, filter, children }) => (
    <a href="#" onClick={() => {
        store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: filter
        })
    }}>{children}</a>
);

export default FilterLink;
