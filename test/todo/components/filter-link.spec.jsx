import React from 'react';
import { shallow } from 'enzyme';
import FilterLink from '../../../src/todo/components/filter-link';

test('renders a Link component', () => {
    const filterLink = shallow(<FilterLink/>);
    expect(filterLink.type().name).toEqual('Link');
});
