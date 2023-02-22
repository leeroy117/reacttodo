import React  from "react";

function useStorageListener(syncronize) {
    
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change)=> {
            if (change.key === 'todos') {
                console.log('hubo cambios en local storage');
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            syncronize();
            setStorageChange(false);
        }

        return {
            show: storageChange,
            toggleShow
        };
}

export {useStorageListener};