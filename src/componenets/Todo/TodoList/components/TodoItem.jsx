// import cross and check images
import cross from "../../../../images/icon-cross.svg"
import check from "../../../../images/icon-check.svg"

// import react stuff
import { useEffect, useState } from "react"

// import delete todo method
import DeleteTodo from "../methods/DeleteTodo"

// funtion to set todo as completed
const changeClassAndCompleatedState = (actualClass, setActualClass, setTodoList, id) => {
    // get necessary things from props

    // set class as enable if is compleate or disable if it is not compleated
    setActualClass(oldClass => {
        if (oldClass === "enable") {
            return "disable"
        } else {
            return "enable"
        }
    })

    // set specific todo as compleated or not compleated
    setTodoList (oldTodoList => {
        // get new todo list and loop throught it
        const newListTodo = oldTodoList.map (oldTodoObj => {

            // get todo state
            let newCheck = oldTodoObj.compleated

            // verify if id of actual todo is the same of the chosed one to change state
            if (oldTodoObj.id === id) { // if it is
                // check if it is compleated
                if (actualClass =="disable") newCheck = true // if it isnt, change to compleate
                else newCheck = false // if it is, change to not compleated
            }

            // return todo
            return {
                value : oldTodoObj.value,
                id: oldTodoObj.id,
                compleated : newCheck
            }
        })
        
        // return new todo list
        return newListTodo
    })
}

// component to show todo item
const TodoItem = ({ id, value, compleated, setTodoList, todoList}) => {

    // check if the todo item compleated
    if (compleated) {
        compleated = "enable"
    }else {
        compleated = "disable"
    }

    // create state for class and initialize that as compleated value
    const [actualClass, setActualClass] = useState(compleated)

    // return html content
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