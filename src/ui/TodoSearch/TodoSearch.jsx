import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue,loading}) {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
        console.log('state',searchValue);
    };

    return (  
        <div className='Todo_SearchBox'>
            <input 
                className='Todo_Search'
                placeholder="cebolla" 
                onChange={onSearchValueChange}
                disabled={loading}
            />
        </div>
    );
}

export  {TodoSearch};