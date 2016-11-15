import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../src/todo/components/footer';

const render = ({
    onFilterClick = () => {}
} = {}) => shallow(
    <Footer
        visibilityFilter="current filter"
        onFilterClick={onFilterClick}
    />
);

test('renders a filter link to show all todos', () => {
    const onFilterClick = () => {};
    const footer = render({ onFilterClick });
    const link = footer.find('FilterLink').at(0);
    expect(link.prop('filter')).toEqual('SHOW_ALL');
    expect(link.prop('currentFilter')).toEqual('current filter');
    expect(link.prop('onClick')).toBe(onFilterClick);
    expect(link.render().text()).toEqual('All');
});

test('renders a filter link to show active todos', () => {
    const onFilterClick = () => {};
    const footer = render({ onFilterClick });
    const link = footer.find('FilterLink').at(1);
    expect(link.prop('filter')).toEqual('SHOW_ACTIVE');
    expect(link.prop('currentFilter')).toEqual('current filter');
    expect(link.prop('onClick')).toBe(onFilterClick);
    expect(link.render().text()).toEqual('Active');
});

test('renders a filter link to show completed todos', () => {
    const onFilterClick = () => {};
    const footer = render({ onFilterClick });
    const link = footer.find('FilterLink').at(2);
    expect(link.prop('filter')).toEqual('SHOW_COMPLETED');
    expect(link.prop('currentFilter')).toEqual('current filter');
    expect(link.prop('onClick')).toBe(onFilterClick);
    expect(link.render().text()).toEqual('Completed');
});
