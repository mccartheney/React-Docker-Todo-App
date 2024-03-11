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

    const [todoList, setTodoList] = useState([]);

    // return main todo functionalities
    return (
        <div className="main_component_todo">
            <div className="main_component_todo_todos">
                {/* todo header */}
                <TodoHeader theme={theme} setTheme={setTheme}/>

                {/* create new todo */}
                <TodoInput setTodoList={setTodoList} todoList={todoList}/>

                {/* show todos and todo options */}
                <TodoList todoList={todoList} setTodoList={setTodoList}/>
            </div>
        </div>
    );
};

export default Todo