import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTodoContext } from '../../TodoContext';
import { TodoForm } from '../../ui/TodoForm/TodoForm';

function EditTodo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setters } = useTodoContext();
    const { editTodo } = setters;
    const location = useLocation();

    console.log(location);

    const edit = (todo) => {
        console.log('id', id);
        let objTodo = {
            id: id,
            text: todo
        };

        editTodo(objTodo);
        navigate('/list');
    }

    const cancel = () => navigate(-1);

    return ( 
        <>
            <TodoForm  
                formTitle="edit todo..." 
                buttonText="Accept"
                submit={edit}
                cancel={cancel}
            />
        </>
     );
}

export {EditTodo} ;
