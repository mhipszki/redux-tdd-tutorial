import { connect } from 'react-redux';
import mapStateToProps from './map-state-to-props';
import mapDispatchToProps from './map-dispatch-to-props';
import Link from '../link';

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;
