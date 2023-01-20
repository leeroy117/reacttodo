import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const {searchValue,setSearchValue } = React.useContext(TodoContext);

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
            />
        </div>
    );
}

export  {TodoSearch};