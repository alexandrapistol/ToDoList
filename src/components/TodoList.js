import TodoItem from './TodoItem';

const TodoList = ({todos, toggleTodo, editTodo, deleteTodo}) => {
    return (
        <div className="todoList">
            {todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    {...todo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            )}
        </div>
    );
}

export default TodoList;