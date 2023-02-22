import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function CreateTodoButton({ onClickFunction }) {

    return ( 
        <FontAwesomeIcon 
            className='Todo_Add' 
            icon={faPlusCircle} 
            size='2x' 
            onClick={onClickFunction} 
        >

        </FontAwesomeIcon>
     );
}

export {CreateTodoButton};