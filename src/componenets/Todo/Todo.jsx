// import react things
import { useState } from "react";

// import components
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";

// Main Component Todo
const Todo = (props) => {
    // get theme states from props 
    const {theme, setTheme} = props;

    // create state for todo list
    const [todoList, setTodoList] = useState([]);

    // crate state to select the type of todos will be showed
    const [ActualTodoOption, setActualTodoOption] = useState("all")

    // return main todo functionalities
    return (
        <div className="main_component_todo">
            <div className="main_component_todo_todos">
                {/* todo header */}
                <TodoHeader theme={theme} setTheme={setTheme}/>

                {/* create new todo */}
                <TodoInput setTodoList={setTodoList} todoList={todoList} setActualTodoOption={setActualTodoOption} />

                {/* show todos and todo options */}
                <TodoList todoList={todoList} setTodoList={setTodoList} ActualTodoOption={ActualTodoOption} setActualTodoOption={setActualTodoOption}/>
            </div>
        </div>
    );
};

export default Todo