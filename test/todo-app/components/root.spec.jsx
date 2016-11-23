import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../../src/todo-app/components/root';

test('passes the received store to the Provider', () => {
    const store = {};
    const root = shallow(<Root store={store}/>);
    const provider = root.find('Provider');
    expect(provider.prop('store')).toBe(store);
});

test('defines default route with optional filter', () => {
    const store = {};
    const root = shallow(<Root store={store}/>);
    const route = root.find('Route');
    expect(route.prop('path')).toEqual('/(:filter)');
});

test('renders TodoApp on default route', () => {
    const store = {};
    const root = shallow(<Root store={store}/>);
    const route = root.find('Route');
    expect(route.prop('component').name).toEqual('TodoApp');
});
