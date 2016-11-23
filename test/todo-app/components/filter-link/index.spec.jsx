import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import FilterLink from '../../../../src/todo-app/components/filter-link';

const render = ({ filter = 'filter' } = {}) => shallow(
    <FilterLink filter={filter}>link</FilterLink>
);

test('renders a react router Link component', () => {
    const filterLink = render();
    expect(filterLink.find(Link).length).toEqual(1);
});

test('passes children to Link component', () => {
    const filterLink = render();
    const link = filterLink.find('Link');
    expect(link.prop('children')).toEqual('link');
});

test('links to base route when `all` filter is given', () => {
    const filter = 'all';
    const filterLink = render({ filter });
    const link = filterLink.find('Link');
    expect(link.prop('to')).toEqual('');
});

test('links to route with given filter otherwise', () => {
    const filter = 'given filter';
    const filterLink = render({ filter });
    const link = filterLink.find('Link');
    expect(link.prop('to')).toEqual('given filter');
});

test('has active style defined', () => {
    const filterLink = render();
    const link = filterLink.find('Link');
    expect(link.prop('activeStyle')).toEqual({
        textDecoration: 'none',
        color: 'black'
    });
});
