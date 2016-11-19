import React from 'react';
import { shallow, mount } from 'enzyme';

class Provider extends React.Component {
    render () {
        return this.props.children;
    }
}

test('renders its children only', () => {
    const provider = shallow(
        <Provider>
            <div>children</div>
        </Provider>
    );
    expect(provider.children().length).toBe(1);
    expect(provider.contains(<div>children</div>)).toBe(true);
});
