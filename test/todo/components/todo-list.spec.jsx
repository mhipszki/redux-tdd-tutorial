import React from 'react';
import { shallow } from 'enzyme';

const TodoList = () => (
    <ul></ul>
);

test('renders an unordered list', () => {
    const list = shallow(<TodoList/>);
    expect(list.type()).toEqual('ul');
});
