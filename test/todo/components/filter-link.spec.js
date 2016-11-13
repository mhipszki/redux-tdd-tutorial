import React from 'react';
import { shallow } from 'enzyme';

const FilterLink = ({ children }) => (
    <a href="#">{children}</a>
);

test('renders an anchor', () => {
    const link = shallow(<FilterLink/>)
    expect(link.type()).toEqual('a');
});

test('renders its children', () => {
    const link = shallow(<FilterLink>children</FilterLink>)
    expect(link.render().text()).toEqual('children');
});

test('points to the same page', () => {
    const link = shallow(<FilterLink>children</FilterLink>)
    expect(link.prop('href')).toEqual('#');
});
