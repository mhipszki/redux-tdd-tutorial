import React from 'react';
import { shallow } from 'enzyme';

const FilterLink = () => (
    <a/>
);

test('renders an anchor', () => {
    const link = shallow(<FilterLink/>)
    expect(link.type()).toEqual('a');
});
