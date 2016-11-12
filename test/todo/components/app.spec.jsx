import React from 'react';
import { shallow } from 'enzyme';
import TodoApp from '../../../src/todo/components/app'

test('renders a button', () => {
    const app = shallow(<TodoApp/>);
    expect(app.find('button').length).toBe(1);
});
