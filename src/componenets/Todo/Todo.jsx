import TodoHeader from "./TodoHeader/TodoHeader";


const Todo = (props) => {
    const {theme, setTheme} = props;

    return (
        <div className="main_component_todo">
            <div className="main_component_todo_todos">
                <TodoHeader theme={theme} setTheme={setTheme}/>
            </div>
        </div>
    );
};

export default Todo