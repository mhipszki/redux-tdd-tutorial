import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import FilterLink from '../../../../src/todo-app/components/filter-link';

const render = () => shallow(
    <FilterLink/>
);

test('renders a react router Link component', () => {
    const filterLink = render();
    expect(filterLink.contains(<Link/>)).toBe(true);
});
