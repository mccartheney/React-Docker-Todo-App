// fucntion to clear all compleated todos
const ClearCompleated = (setTodoList) => {
    // chaneg todo list
    setTodoList(arrayOfTodos => {
        // return only todos that dont is compleated   
        return arrayOfTodos.filter(todoObj => todoObj.compleated !== true)
    })
}

export default ClearCompleated;