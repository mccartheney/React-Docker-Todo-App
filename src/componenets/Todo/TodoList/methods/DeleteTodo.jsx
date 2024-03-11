const DeleteTodo = (setTodoList, id) => {
    setTodoList(arrayOfTodos =>{
        return arrayOfTodos.filter(todoObj => todoObj.id !== id);
    });
};

export default DeleteTodo;