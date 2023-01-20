import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from "../TodoContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

function Modal({children}) {
    const {openModal, setOpenModal} = React.useContext(TodoContext);

    const onClickCloseModal= () => setOpenModal(!openModal);

    return ReactDOM.createPortal( 
        <div className={!!openModal ? 'Modal_Container__visible' : 'Modal_Container__invisible'}>
            <div className='Modal_Content'>
                <div className='Modal_CloseBtn'>
                    <FontAwesomeIcon icon={faCircleXmark} size='2x' onClick={onClickCloseModal} />
                </div>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};