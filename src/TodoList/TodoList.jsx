import React from 'react';
import './TodoList.css';

function TodoList(props) {
    return (
        <section className='Todo_List'>
            {props.children}
        </section>
      );
}

export {TodoList};