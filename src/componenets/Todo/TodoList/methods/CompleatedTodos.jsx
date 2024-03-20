// import TodoItem component
import TodoItem from "../components/TodoItem"

// create component that shows only compleated todos
const CompleatedTodos = ({ todoList, setTodoList }) => {
    // get todo states from props

    // return a list od compleates todos only
    return todoList.map((todoItemFromList) => {
        // check if todo is compleated
        if (todoItemFromList.compleated === true) { // if it is
            // return todoItem
            return (
                <TodoItem
                    id={todoItemFromList.id}
                    value={todoItemFromList.value}
                    compleated={todoItemFromList.compleated}
                    setTodoList={setTodoList}
                />
            )
        }
    })
}

export default CompleatedTodos