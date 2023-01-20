import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    
    const onClickOpenModal = () => setOpenModal(!openModal);

    return ( 
        <FontAwesomeIcon 
            className='Todo_Add' 
            icon={faPlusCircle} 
            size='2x' 
            onClick={onClickOpenModal} 
        >

        </FontAwesomeIcon>
     );
}

export {CreateTodoButton};