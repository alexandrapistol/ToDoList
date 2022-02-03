import React, { useState, useEffect } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import './App.css';


function App() {
    const [input, setInput] = useState("")
    const [toDoList, setToDoList] = useState(() => {
        const saved = localStorage.getItem("toDoList");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    })
    //on startup get from localstorage and update toDoList
    useEffect( () => {
        getLocalToDoList()
    }, [])
    //update localstorage when toDoList is modified
    useEffect( () => {
        saveLocalToDoList()
    }, [toDoList])

    const deleteTodo = (id) => {
        setToDoList(toDoList.filter( obj => {
            return obj.id !== id;
        }));
    }
    const completeTodo = (id) => {
        setToDoList(toDoList.map( obj => {
            if(obj.id === id){
                obj.isCompleted = !obj.isCompleted
            }
            return obj
        }))
    }

    const editTodo = (id, text) => {
        setToDoList(
            toDoList.map( obj => {
                if(obj.id === id){
                    obj.name = text
                }
                return obj
            })
        )
    }

    const saveLocalToDoList = () => {
        localStorage.setItem("toDoList", JSON.stringify(toDoList))
    }
    const getLocalToDoList = () => {
        if(localStorage.getItem(toDoList) === null){
            localStorage.setItem("toDoList", JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("toDoList"))
            setToDoList(todoLocal)
        }
    }

  return (
    <div className="App">
        <header className="App-header"></header>
        <ToDoForm toDoList={toDoList} setToDoList={setToDoList} input={input} setInput={setInput} ></ToDoForm>
        <ToDoList toDoList={toDoList} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo}></ToDoList>   
    </div>
  );
}

export default App;
