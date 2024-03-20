import cross from "../../../../images/icon-cross.svg"

import check from "../../../../images/icon-check.svg"
import { useEffect, useState } from "react"

import DeleteTodo from "../methods/DeleteTodo"
import TodoList from "../TodoList"

const changeClassAndCompleatedState = (actualClass, setActualClass, setTodoList, id) => {
    setActualClass(oldClass => {
        if (oldClass === "enable") {
            return "disable"
        } else {
            return "enable"
        }
    })

    setTodoList (oldTodoList => {
        const newListTodo = oldTodoList.map (oldTodoObj => {
            let newCheck = oldTodoObj.compleated
            if (oldTodoObj.id === id) {
                if (actualClass =="disable") newCheck = true
                else newCheck = false
            }

            return {
                value : oldTodoObj.value,
                id: oldTodoObj.id,
                compleated : newCheck
            }
        })
    
        return newListTodo
    })
}

const TodoItem = ({ id, value, compleated, setTodoList, todoList}) => {

    if (compleated) {
        compleated = "enable"
    }else {
        compleated = "disable"
    }
    console.log(compleated);
    console.log(todoList);

    const [actualClass, setActualClass] = useState(compleated)

    return (
        <div className="main_component_todo_todos_todoList_todoItem" id={id}>
            <div className="main_component_todo_todos_todoList_todoItem_check">
                <div className={actualClass} onClick={() => { changeClassAndCompleatedState(actualClass,setActualClass, setTodoList, id)}}>

                    {(actualClass === "enable") ? <img srcSet={check}/> : ""}
                </div>
            </div>
            <div className="main_component_todo_todos_todoList_todoItem_value">
                <p className={actualClass}>
                    {value}
                </p>
                
                <button onClick={() => DeleteTodo(setTodoList, id, setActualClass)}>
                    <img src={cross} alt="delete"/>
                </button>
            </div>
        </div>
    )
}

export default TodoItem