import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter, children }) => {
    const to = filter === 'all' ? '' : filter;
    const activeStyle = {
        textDecoration: 'none',
        color: 'black'
    };
    const props = { to, activeStyle };
    return (
        <Link {...props}>
            {children}
        </Link>
    )
};

export default FilterLink;
