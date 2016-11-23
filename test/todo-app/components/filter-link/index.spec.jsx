import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import FilterLink from '../../../../src/todo-app/components/filter-link';

const render = () => shallow(
    <FilterLink>link</FilterLink>
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
