import TodoItem from "../components/TodoItem"

const ActiveTodos = ({ todoList, setTodoList }) => {
    return todoList.map((todoItemFromList) => {
        if (todoItemFromList.compleated === false) {
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