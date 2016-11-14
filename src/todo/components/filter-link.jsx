import React from 'react';

const FilterLink = ({ store, filter, currentFilter, children }) => {
    if (filter === currentFilter) {
        return (<span>{children}</span>);
    }
    const onClick = () => {
        store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: filter
        })
    };
    return (
        <a href="#" onClick={onClick}>{children}</a>
    );
};

export default FilterLink;
