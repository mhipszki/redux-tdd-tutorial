import React from 'react';
import { shallow } from 'enzyme';

const FilterLink = ({ children }) => (
    <div>{ children }</div>
);

const Footer = ({ store, currentFilter }) => (
    <p>
        Show
        {' '}
        <FilterLink
            store={store}
            filter="SHOW_ALL"
            currentFilter={currentFilter}
        >All</FilterLink>
        {' '}
        <FilterLink
            store={store}
            filter="SHOW_ACTIVE"
            currentFilter={currentFilter}
        >Active</FilterLink>
        {' '}
        <FilterLink
            store={store}
            filter="SHOW_COMPLETED"
            currentFilter={currentFilter}
        >Completed</FilterLink>
    </p>
);

const fakeStore = {};

const render = () => {
    return shallow(
        <Footer store={fakeStore} currentFilter="current filter" />
    );
};

test('renders a filter link to show all todos', () => {
    const footer = render();
    const link = footer.find('FilterLink').at(0);
    expect(link.prop('store')).toBe(fakeStore);
    expect(link.prop('filter')).toEqual('SHOW_ALL');
    expect(link.prop('currentFilter')).toEqual('current filter');
    expect(link.render().text()).toEqual('All');
});

test('renders a filter link to show active todos', () => {
    const footer = render();
    const link = footer.find('FilterLink').at(1);
    expect(link.prop('store')).toBe(fakeStore);
    expect(link.prop('filter')).toEqual('SHOW_ACTIVE');
    expect(link.prop('currentFilter')).toEqual('current filter');
    expect(link.render().text()).toEqual('Active');
});

test('renders a filter link to show completed todos', () => {
    const footer = render();
    const link = footer.find('FilterLink').at(2);
    expect(link.prop('store')).toBe(fakeStore);
    expect(link.prop('filter')).toEqual('SHOW_COMPLETED');
    expect(link.prop('currentFilter')).toEqual('current filter');
    expect(link.render().text()).toEqual('Completed');
});
