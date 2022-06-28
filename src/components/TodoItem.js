const TodoItem = ({id, status, title, toggleTodo, editTodo, deleteTodo}) => {
    const activeClass = status === 'completed' ? 'active' : '';
    const toggleButtonName = status === 'completed' ? 'Mark as active' : 'Mark as completed';

    const toggleHandler = (evt) => {
        evt.preventDefault();
        toggleTodo(id);
    }

    const editHandler = (evt) => {
        evt.preventDefault();
        editTodo(id, title + "Edited");
    }

    const deleteHandler = (evt) => {
        evt.preventDefault();
        deleteTodo(id);
    }

    return (
        <div className='todoItem'>
            <span className={activeClass}>{title}</span>
            <div className="options">
                <button className='btn btn-outline-success btn-sm' onClick={toggleHandler}>{toggleButtonName}</button>
                <button className='btn btn-outline-primary btn-sm' onClick={editHandler}>Edit</button>
                <button className='btn btn-outline-danger btn-sm' onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;