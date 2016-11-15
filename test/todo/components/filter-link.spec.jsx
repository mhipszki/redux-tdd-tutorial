import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import reducer from '../../../src/reducer/app';
import FilterLink from '../../../src/todo/components/filter-link';

const render = () => {
    const store = createStore(reducer);
    const currentFilter = store.getState().visibilityFilter;
    return shallow(
        <FilterLink
            filter={currentFilter}
            store={store}
        >link</FilterLink>
    );
}

test('renders a Link component', () => {
    const filterLink = render();
    expect(filterLink.type().name).toEqual('Link');
});

test('passes children to Link component', () => {
    const link = render();
    expect(link.prop('children')).toEqual('link');
});

test('renders active Link when received and current filter are same', () => {
    const link = render();
    expect(link.prop('active')).toBe(true);
});
