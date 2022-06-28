import * as todoActionsEnum from '../../utils/todoActionsEnum';

export const addTodo = ({id, title, status, due_on}) => ({
    type: todoActionsEnum.ADD_TODO,
    id: id,
    title,
    status,
    due_on
});

export const editTodo = (id, title) => ({
    type: todoActionsEnum.EDIT_TODO,
    id,
    title
});

export const toggleTodo = id => ({
    type: todoActionsEnum.TOGGLE_TODO,
    id
});

export const deleteTodo = id => ({
    type: todoActionsEnum.DELETE_TODO,
    id
});

export const findTodos = (title) => ({
    type: todoActionsEnum.FIND_TODOS,
    title
});