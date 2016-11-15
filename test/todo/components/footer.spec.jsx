import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../src/todo/components/footer';

test('renders a filter link to show all todos', () => {
    const store = { getState: () => ({}) };
    const footer = shallow(<Footer store={store}/>);
    const link = footer.find('FilterLink').at(0);
    expect(link.prop('filter')).toEqual('SHOW_ALL');
    expect(link.prop('store')).toEqual(store);
    expect(link.render().text()).toEqual('All');
});

test('renders a filter link to show active todos', () => {
    const store = { getState: () => ({}) };
    const footer = shallow(<Footer store={store}/>);
    const link = footer.find('FilterLink').at(1);
    expect(link.prop('filter')).toEqual('SHOW_ACTIVE');
    expect(link.prop('store')).toEqual(store);
    expect(link.render().text()).toEqual('Active');
});

test('renders a filter link to show completed todos', () => {
    const store = { getState: () => ({}) };
    const footer = shallow(<Footer store={store}/>);
    const link = footer.find('FilterLink').at(2);
    expect(link.prop('filter')).toEqual('SHOW_COMPLETED');
    expect(link.prop('store')).toEqual(store);
    expect(link.render().text()).toEqual('Completed');
});
