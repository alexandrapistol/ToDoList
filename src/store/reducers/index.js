import {combineReducers} from 'redux';
import todoList from './todoList'

export default combineReducers({
    todos: todoList
});