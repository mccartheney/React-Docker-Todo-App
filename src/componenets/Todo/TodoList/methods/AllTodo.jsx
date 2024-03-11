import TodoItem from "../components/TodoItem"

const AllTodo = ({ todoList, setTodoList}) => {
    return todoList.map(todoItemFromList => {
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