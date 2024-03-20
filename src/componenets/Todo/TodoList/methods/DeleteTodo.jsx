// function to delete todos
const DeleteTodo = (setTodoList, id, setClass) => {
    // put todo item class as disable before delete them to prevent bug to prevent bugs (* -> bug description)
    setClass("disable")

    // modify todo list
    setTodoList(arrayOfTodos =>{
        // return all todos expect the chose one to delete
        return arrayOfTodos.filter(todoObj => todoObj.id !== id);
    });
};

export default DeleteTodo;

// * -> on delete compleated todo, the bellow todo will be compleated too even it isnt