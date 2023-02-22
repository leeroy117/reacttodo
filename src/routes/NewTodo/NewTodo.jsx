import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useTodoContext } from "../../TodoContext";
import { TodoForm } from "../../ui/TodoForm/TodoForm";

function NewTodo() {
    const navigate = useNavigate();
    const { setters } = useTodoContext();
    const { addTodo } = setters;

    const add = (todo) => {
        console.log(addTodo);
        addTodo(todo);
        navigate('/list');
    }

    const cancel = () => navigate(-1);

    return ( 
        <>
            <TodoForm  
                formTitle="add a new todo..." 
                buttonText="Add"
                submit={add}
                cancel={cancel}
            />
        </>
     );
}

export {NewTodo};