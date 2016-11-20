import { connect } from 'react-redux';
import mapStateToProps from '../map-state-to-props';
import mapDispatchToProps from '../map-dispatch-to-props';
import TodoList from './todo-list';

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
