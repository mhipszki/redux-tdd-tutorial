import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import reducer from '../../../src/reducer/app';
import FilterLink from '../../../src/todo/components/filter-link';

const render = ({
    store = createStore(reducer),
    filter = ''
} = {}) => {
    const currentFilter = store.getState().visibilityFilter;
    return mount(
        <FilterLink
            filter={filter ? filter : currentFilter}
            store={store}
        >link</FilterLink>
    );
}

test('renders a Link component', () => {
    const filterLink = render();
    const link = filterLink.find('Link');
    expect(link.type().name).toEqual('Link');
});

test('passes children to Link component', () => {
    const filterLink = render();
    const link = filterLink.find('Link');
    expect(link.prop('children')).toEqual('link');
});

test('renders active Link when received and current filter are same', () => {
    const filterLink = render();
    const link = filterLink.find('Link');
    expect(link.prop('active')).toBe(true);
});

test('changes visibility filter when clicked', () => {
    const store = createStore(reducer);
    const filter = 'new filter';
    const filterLink = render({ store, filter });
    const link = filterLink.find('Link');
    link.simulate('click');
    const currentFilter = store.getState().visibilityFilter;
    expect(currentFilter).toEqual('new filter');
});

test('subscribes to store changes', () => {
    const store = createStore(reducer);
    store.subscribe = jest.fn();
    const filterLink = render({ store });
    expect(store.subscribe).toBeCalled();
});

test('is updated on store changes', () => {
    FilterLink.prototype.forceUpdate = jest.fn();
    const store = createStore(reducer);
    const filterLink = render({ store });
    store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'new filter'
    });
    expect(FilterLink.prototype.forceUpdate).toBeCalled();
});

test('unsubscribes from store changes when unmounted', () => {
    FilterLink.prototype.forceUpdate = jest.fn();
    const store = createStore(reducer);
    const filterLink = render({ store });
    filterLink.unmount();
    store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'new filter'
    });
    expect(FilterLink.prototype.forceUpdate).not.toBeCalled();
});
