import {connect} from 'react-redux'
import {deleteTodo, editTodo, toggleTodo} from '../store/actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
    todos: state.todos.filter(todo => todo.status === 'completed')
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    editTodo: (id, title) => dispatch(editTodo(id, title)),
    deleteTodo: id => dispatch(deleteTodo(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
