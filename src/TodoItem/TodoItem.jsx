import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

function TodoItem(props) {
    return ( 
        <div 
            className={`Todo_Item ${props.completed && 'Todo_Item--completed'}`}
        >
            <FontAwesomeIcon 
                icon={faCheck}
                onClick={props.onComplete} 
            />
            <span>{props.text}</span>
            <FontAwesomeIcon icon={faTrash} 
                onClick={props.onDelete}
            />
        </div>
     );
}

export { TodoItem };