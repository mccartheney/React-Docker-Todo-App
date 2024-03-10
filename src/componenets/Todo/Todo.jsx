// import react things
import { useState } from "react";

// import components
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoInput from "./TodoInput/TodoInput";

// Main Component Todo
const Todo = (props) => {
    // get theme states from props 
    const {theme, setTheme} = props;

    const [todoList, setTodoList] = useState([]);
    console.log(todoList);

    // return main todo functionalities
    return (
        <div className="main_component_todo">
            <div className="main_component_todo_todos">
                {/* todo header */}
                <TodoHeader theme={theme} setTheme={setTheme}/>

                {/* create new todo */}
                <TodoInput setTodoList={setTodoList} todoList={todoList}/>

            </div>
        </div>
    );
};

export default Todo