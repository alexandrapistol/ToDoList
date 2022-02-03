import React from "react";

const ToDoForm = ({toDoList, setToDoList, input, setInput}) => {
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(input === '') return;
        setToDoList([
            ...toDoList, 
            {id: Math.floor(Math.random() * 1000), name: input, isCompleted: false}]
        )
        setInput("")
    }
    return (
        <form onSubmit={submitHandler} className="todo-form">
            <input 
                type="text"
                placeholder="Add new todo..."
                className="todo-input"
                value={input}
                onChange={inputHandler}
            />
            <button className="todo-button" type="submit">
                add
            </button>
        </form>
    )
}

export default ToDoForm;