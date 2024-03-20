// import todo item
import TodoItem from "../components/TodoItem"

// create component to show active todos
const ActiveTodos = ({ todoList, setTodoList }) => {
    // return list od actives todos
    return todoList.map((todoItemFromList) => {
        // check if tidi is active
        if (todoItemFromList.compleated === false) { // if it is

            // return todo item
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

export default ActiveTodos