import React from 'react';
import { shallow } from 'enzyme';
import Link from '../../../src/todo/components/link';

const render = ({
    active = false,
    onClick = () => {}
} = {}) => {
    const props = { active, onClick };
    return shallow(<Link {...props}>title</Link>);
};

it('renders simple text when active', () => {
    const active = true;
    const link = render({ active });
    expect(link.type()).toEqual('span');
});

test('renders an anchor when not active', () => {
    const active = false;
    const link = render({ active });
    expect(link.type()).toEqual('a');
});

test('renders its children', () => {
    const link = render();
    expect(link.render().text()).toEqual('title');
});

test('points to the same page', () => {
    const link = render();
    expect(link.prop('href')).toEqual('#');
});

test('executes callback when clicked', () => {
    const onClick = jest.fn();
    const link = render({ onClick });
    link.simulate('click');
    expect(onClick).toBeCalled();
});
