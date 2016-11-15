import React from 'react';

const FilterLink = ({
    filter,
    currentFilter,
    children,
    onClick
}) => {
    if (filter === currentFilter) {
        return (<span>{children}</span>);
    }
    return (
        <a href="#"
            onClick={() => {
                onClick(filter);
            }}
        >
            {children}
        </a>
    );
};

export default FilterLink;
