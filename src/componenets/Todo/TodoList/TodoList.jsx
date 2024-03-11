// import react stuff
import { useState } from "react"

// import components
import AllTodo from "./methods/AllTodo"
import CompleatedTodos from "./methods/CompleatedTodos"
import ActiveTodos from "./methods/ActiveTodos"
import InterativeButtons from "./components/InterativeButton"

// Compontent for return todo list
const TodoList = (props) => {
    // get todoList states from props
    const {todoList, setTodoList} = props;

    // crate state to select the type of todos will be showed
    const [ActualTodoOption, setActualTodoOption ] = useState ("all")

    // return todo list html
    return (
        <div className="main_component_todo_todos_todoList">
            {/* 
                if ActualTodoOption is all return allTodo
                else if ActualTodoOption is compleated return CompleatedTodos 
                else return ActiveTodos
            */}
            {(ActualTodoOption === "all") ? <AllTodo todoList={todoList} setTodoList={setTodoList}/> : 
                ((ActualTodoOption === "compleated") ? <CompleatedTodos todoList={todoList} setTodoList={setTodoList}/> :
                    <ActiveTodos todoList={todoList} setTodoList={setTodoList}/>)}
                    
            {/* display Interative Buttons */}
            <InterativeButtons todoList={todoList} setTodoList={setTodoList} setActualTodoOption={setActualTodoOption}/>
        </div>
    )
} 


export default TodoList