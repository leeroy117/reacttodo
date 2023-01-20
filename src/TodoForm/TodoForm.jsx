import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {

    const [taskText, setTaskText] = React.useState('');
    const { addTodo, setOpenModal, openModal } = React.useContext(TodoContext);

    const onChangeText = (event) =>{
        setTaskText(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(taskText);
    }

    const onCancel = () => {
        setOpenModal(!openModal);
    }

    return ( 
        <form onSubmit={onSubmit}>
            <div className='TodoForm_Container'>
                <div className='TodoForm_Content'>
                    <h3 htmlFor="">Add a new task...</h3>
                    <textarea 
                        className='TodoForm_Task' 
                        rows="10"
                        onChange={onChangeText}
                    >
                    </textarea>
                    <p>{taskText}</p>
                </div>
                <div className='TodoForm_Footer'>
                    <button 
                        className='TodoForm_CancelBtn' 
                        type='button'
                        onClick={onCancel} 
                    >Cancel</button>
                    <button className='TodoForm_AddBtn' type='submit'>Add</button>
                </div>
            </div>
        </form>
     );
}

export { TodoForm } ;