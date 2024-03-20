// import todo item component
import TodoItem from "../components/TodoItem"

// create component to show all todos
const AllTodo = ({ todoList, setTodoList}) => {
    // return todo list with all todos
    return todoList.map(todoItemFromList => {
        // return todo item
        return (
            <TodoItem
                id={todoItemFromList.id}
                value={todoItemFromList.value}
                compleated={todoItemFromList.compleated}
                setTodoList={setTodoList}
            />
        )
    })
}

export default AllTodo