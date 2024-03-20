const DeleteTodo = (setTodoList, id, setClass) => {
    setClass("disable")
    setTodoList(arrayOfTodos =>{
        return arrayOfTodos.filter(todoObj => todoObj.id !== id);
    });
};

export default DeleteTodo;