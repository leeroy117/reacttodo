import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {
    return ( 
        <div className="Todos_Empty">
            <h1>No todos</h1>
            <h3>Please create the first one</h3>
        </div>
     );
}

export {EmptyTodos} ;