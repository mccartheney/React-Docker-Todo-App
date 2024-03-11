const ClearCompleated = (setTodoList) => {
    setTodoList(arrayOfTodos => {
        return arrayOfTodos.filter(todoObj => todoObj.compleated !== true)
    })
}

export default ClearCompleated;