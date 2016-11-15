import React from 'react';
import { shallow } from 'enzyme';
import FilterLink from '../../../src/todo/components/filter-link';

const render = ({
    filter = 'filter',
    currentFilter = 'current filter',
    onClick = () => {}
} = {}) => {
    const props = { filter, currentFilter, onClick };
    return shallow(<FilterLink {...props}>filter name</FilterLink>);
};

test('renders an anchor when filter is not current filter', () => {
    const filter = 'filter';
    const currentFilter = 'another filter';
    const link = render({ filter, currentFilter });
    expect(link.type()).toEqual('a');
});

it('renders simple text when filter is current filter', () => {
    const filter = 'filter';
    const currentFilter = 'filter';
    const link = render({ filter, currentFilter });
    expect(link.type()).toEqual('span');
});

test('renders its children', () => {
    const link = render();
    expect(link.render().text()).toEqual('filter name');
});

test('points to the same page', () => {
    const link = render();
    expect(link.prop('href')).toEqual('#');
});

test('executes callback when clicked', () => {
    const onClick = jest.fn();
    const link = render({ onClick });
    link.simulate('click');
    expect(onClick).toBeCalledWith('filter');
});
