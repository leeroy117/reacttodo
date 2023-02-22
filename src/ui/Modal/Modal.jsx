import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

function Modal({children, id, openModal, setOpenModal}) {
    const onClickCloseModal= () => setOpenModal(false);

    return ReactDOM.createPortal( 
        <div className={!!openModal ? 'Modal_Container__visible' : 'Modal_Container__invisible'}>
            <div className='Modal_Content'>
                {id !== 'modal_refresh' && (
                <div className='Modal_CloseBtn'>
                    <FontAwesomeIcon icon={faCircleXmark} size='2x' onClick={onClickCloseModal} />
                </div>)}
                
                {children}
            </div>
        </div>,
        document.getElementById(id)
    );
}

export {Modal};