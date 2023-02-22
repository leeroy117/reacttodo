import React from 'react';
import './TodoList.css';

function TodoList({
    error,
    loading,
    searchedTodos,
    onError,
    onLoading,
    onEmpty,
    render,
    totalTodos,
    onSearchedTodos,
    searchText,
    children
}) {
    const onRender = render || children;
    return (
        <section className='Todo_List'>
            {error && onError()}
            {loading && onLoading()}
            {(!loading && !totalTodos) && onEmpty()}

            {(!!totalTodos && !searchedTodos.length) && onSearchedTodos(searchText)}

            {(!loading && !error) && searchedTodos.map((todo) => onRender(todo))}
        </section>
      );
}

export {TodoList};