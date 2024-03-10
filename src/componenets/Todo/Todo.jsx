// import components
import TodoHeader from "./TodoHeader/TodoHeader";

// Main Component Todo
const Todo = (props) => {
    // get theme states from props 
    const {theme, setTheme} = props;

    // return main todo functionalities
    return (
        <div className="main_component_todo">
            <div className="main_component_todo_todos">
                {/* todo header */}
                <TodoHeader theme={theme} setTheme={setTheme}/>
            </div>
        </div>
    );
};

export default Todo