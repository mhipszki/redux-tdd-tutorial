import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import reducer from '../../../src/reducer/app';
import Footer from '../../../src/todo-app/components/footer';

const getMountOptions = () => {
    const context = { store: createStore(reducer) };
    const childContextTypes = {
        store: React.PropTypes.object
    }
    return { context, childContextTypes };
}

const render = () => mount(<Footer/>, getMountOptions());

test('renders a filter link to show all todos', () => {
    const footer = render();
    const link = footer.find('Connect(Link)').at(0);
    expect(link.prop('filter')).toEqual('SHOW_ALL');
    expect(link.render().text()).toEqual('All');
});

test('renders a filter link to show active todos', () => {
    const footer = render();
    const link = footer.find('Connect(Link)').at(1);
    expect(link.prop('filter')).toEqual('SHOW_ACTIVE');
    expect(link.render().text()).toEqual('Active');
});

test('renders a filter link to show completed todos', () => {
    const footer = render();
    const link = footer.find('Connect(Link)').at(2);
    expect(link.prop('filter')).toEqual('SHOW_COMPLETED');
    expect(link.render().text()).toEqual('Completed');
});
