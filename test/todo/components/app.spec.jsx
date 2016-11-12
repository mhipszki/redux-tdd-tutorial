import React from 'react';
import { shallow } from 'enzyme';
import TodoApp from '../../../src/todo/components/app'

test('renders a button to add todos', () => {
    const app = shallow(<TodoApp/>);
    const button = app.find('button');
    expect(button.render().text()).toBe('Add todo');
});
