import * as todoActionsEnum from '../../utils/todoActionsEnum';
import {setLocalStorageItem} from "../../storage/localStorage";

const todoList = (state = [], action) => {
    let newState = state;

    switch (action.type) {
        case todoActionsEnum.ADD_TODO:
            newState = [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    status: action.status,
                    due_on: action.due_on
                }
            ];
            break;

        case todoActionsEnum.TOGGLE_TODO:
            newState = state.map(todo => {
                if (todo.id !== action.id) return todo;

                const status = todo.status === 'completed' ? 'pending' : 'completed';
                return {...todo, status};
            });
            break;

        case todoActionsEnum.EDIT_TODO:
            newState = state.map(todo => {
                return (todo.id === action.id)
                    ? {...todo, title: action.title}
                    : todo
            });
            break;

        case todoActionsEnum.DELETE_TODO:
            const todoIndex = state.findIndex(todo => todo.id === action.id);
            if (todoIndex === -1) break;

            newState = state.slice(0, todoIndex).concat(state.slice(todoIndex + 1));
            break;

        case todoActionsEnum.FIND_TODOS:
            const searchText = action.title.trim().toLowerCase();
            if (searchText.length === 0) break;

            newState = state.filter(todo => todo.title.trim().toLowerCase() === searchText);
            break;
        default:
            break;
    }

    setLocalStorageItem('todos', newState);
    return newState;
}

export default todoList;
