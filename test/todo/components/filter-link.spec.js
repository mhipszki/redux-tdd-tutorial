import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import visibilityFilter from '../../../src/reducer/visibility-filter';

const FilterLink = ({ store, filter, children }) => (
    <a href="#" onClick={() => {
        store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: filter
        })
    }}>{children}</a>
);

const store = createStore(visibilityFilter);

const render = () => shallow(
    <FilterLink store={store} filter={'filter'}>
        filter name
    </FilterLink>
);

test('renders an anchor', () => {
    const link = shallow(<FilterLink/>)
    expect(link.type()).toEqual('a');
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
