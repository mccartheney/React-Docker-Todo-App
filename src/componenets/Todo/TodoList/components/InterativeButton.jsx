// import clear compleated method
import ClearCompleated from "../methods/ClearCompleated"

// create component to show all interative buttons 
const InterativeButtons = ({ setActualTodoOption, setTodoList, todoList }) => {
    return (
        <div className="main_component_todo_todos_todoList_filters">
            <div className="main_component_todo_todos_todoList_filters_quantity">
                <p>
                    {todoList.filter(todoObj => todoObj.compleated === false).length} items left
                </p>
            </div>

            <div className="main_component_todo_todos_todoList_filters_filters">
                <button onClick={() => { setActualTodoOption("all") }}>
                    All
                </button>
                <button onClick={() => { setActualTodoOption ("actived")}}>
                    Active
                </button>
                <button onClick={() => { setActualTodoOption("compleated") }}>
                    Compleated
                </button>
            </div>

            <div className="main_component_todo_todos_todoList_filters_compleated">
                <button onClick={() => { 
                    ClearCompleated(setTodoList)
                    setActualTodoOption("actived")
                }}>
                    Clear Compleated
                </button>
            </div>
        </div>
    )
}

export default InterativeButtons