import React from 'react';
import Link from './link';

class FilterLink extends React.Component {
    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render () {
        const { filter, store, children } = this.props;
        const currentFilter = store.getState().visibilityFilter;
        const active = filter === currentFilter;
        const changeFilter = () => {
            store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            })
        }
        return (
            <Link active={active} onClick={changeFilter}>{children}</Link>
        );
    }
}

export default FilterLink;
