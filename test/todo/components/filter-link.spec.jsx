import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import FilterLink from '../../../src/todo/components/filter-link';
import visibilityFilter from '../../../src/reducer/visibility-filter';

const store = createStore(visibilityFilter);

const render = ({ currentFilter = 'current filter'} = {}) => shallow(
    <FilterLink store={store} filter={'filter'} currentFilter={currentFilter}>
        filter name
    </FilterLink>
);

test('renders an anchor when filter is not current filter', () => {
    const link = render();
    expect(link.type()).toEqual('a');
});

it('renders simple text when filter is current filter', () => {
    const link = render({ currentFilter: 'filter' });
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

test('sets visibility filter when clicked', () => {
    const link = render();
    link.simulate('click');
    expect(store.getState()).toEqual('filter');
});
