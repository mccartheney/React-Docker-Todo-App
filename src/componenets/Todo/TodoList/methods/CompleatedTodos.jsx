import TodoItem from "../components/TodoItem"

const CompleatedTodos = ({ todoList, setTodoList }) => {
    return todoList.map((todoItemFromList) => {
        if (todoItemFromList.compleated === true) {
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