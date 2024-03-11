// import react stuff
import { useState } from "react";

// funtion to create new todo
const AddNewTodo = (event, value, id, setTodoList, todoList) => {
    // dont reload page when add new todo
    event.preventDefault();

    // create new todo obj
    const newTodo = {
        value : value,
        id : id,
        compleated : false
    }

    // with todo state add todo to their list
    setTodoList(oldTodoList => {
        return ([...oldTodoList, newTodo]);
    });
}   

// main component
const TodoInput = (props) => {
    // get todo states from props
    const {todolist, setTodoList} = props

    // create states for new todo input
    const [inputValue, setInputValue] = useState("")

    // return form
    return (
        // when submit that form:
        //      add new todo with arguments:
        //          -event, input value, id, listStates
        <form className="main_component_todo_todos_inputTodo" 
            onSubmit={(event) => AddNewTodo(event, inputValue, Math.floor(Math.random() * 100), setTodoList, todolist)}>
            <input type="marker" disabled="disabled" className="main_component_todo_todos_inputTodo-marker" />

            {/* input with the value for new todo */}
            <input 
                type="text" 
                className="main_component_todo_todos_inputTodo-input" 
                placeholder="Create a new todo ..." 
                onChange={(event) => {setInputValue(event.target.value)}}
                value={inputValue}
            />

            <input type="submit" hidden />
        </form>
    )
};

// export TodoInput
export default TodoInput;