import React, { useState } from "react";

const Todo = ({todo, deleteTodo, completeTodo, editTodo}) => {
    //State
    const [editMode, setEditMode] = useState(false)
    const [input, setInput] = useState(todo.name)
    //Handlers
    const inputHandler = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }
    const saveHandler = (e) => {
        e.preventDefault()
        editTodo(todo.id, input)
        setEditMode(false)
    }
    return (
        <div className="todo">
        <li key={todo.id}>
            
                {!editMode ? 
                    <div 
                        className={`${todo.isCompleted ? "completed" : ''}`} 
                        onClick={() => setEditMode(true)}> 
                        {todo.name}
                    </div> : 
                    <form onSubmit={saveHandler}>
                        <input type="text" value={input} onChange={inputHandler}/>
                        <button type="submit">save</button>
                    </form>
                }
                <div className="action-buttons">
                    {completeTodo && 
                        <button className=".complete-btn" onClick={() => completeTodo(todo.id)}>
                            {`${todo.isCompleted ? "undo" : "do"}`}
                        </button>}
                    {deleteTodo && 
                        <button className=".trash-btn" onClick={() => deleteTodo(todo.id)}>
                            X
                        </button>}
                </div>
            </li>
        </div>
    )
}
export default Todo;