import React from "react";
import './TodoCounter.css';

function TodoCounter({completedTodos, totalTodos, loading}) {

    return(
        <h2 className={`TodoCounter ${!!loading && "TodoCounter__loading"}`}>Done {completedTodos} of {totalTodos} todos</h2>
    );
}

export { TodoCounter };