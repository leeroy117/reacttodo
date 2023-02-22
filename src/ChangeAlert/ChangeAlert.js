import React from 'react';
import {useStorageListener} from './useStorageListener';
import { Modal } from "../ui/Modal/Modal";

function ChangeAlert({syncronize}) {
    const {show, toggleShow} = useStorageListener(syncronize);

    if (show) {
        
        return (
            // <div>
            //     <p>Changes detected</p>
            //     <button
            //         onClick={toggleShow}
            //     >Refresh</button>
            // </div>
            <Modal 
                id='modal_refresh'
                openModal={show}
             >
                <p>Changes detected</p>
                    <button
                    onClick={toggleShow}
                 >Refresh</button>
            </Modal>
        );
    }else{
        return null;
    }
    
}

export {ChangeAlert};