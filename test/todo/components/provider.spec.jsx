import React from 'react';
import { shallow, mount } from 'enzyme';

class Provider extends React.Component {
    getChildContext() {
        return {
            store: this.props.store
        };
    }
    render () {
        return this.props.children;
    }
}
Provider.childContextTypes = {
    store: React.PropTypes.object
};

test('renders its children only', () => {
    const provider = shallow(
        <Provider>
            <div>children</div>
        </Provider>
    );
    expect(provider.children().length).toBe(1);
    expect(provider.contains(<div>children</div>)).toBe(true);
});

test('provides store in child contexts', () => {
    class App extends React.Component {
        render() {
            const { store } = this.context;
            return (
                <div>{store.value}</div>
            );
        }
    }
    App.contextTypes = { store: React.PropTypes.object };
    const store = { value: 'a value' };
    const provider = mount(
        <Provider store={store}>
            <App/>
        </Provider>
    );
    const app = provider.find('App');
    expect(app.contains(<div>a value</div>)).toBe(true);
});
