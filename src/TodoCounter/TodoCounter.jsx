import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return(
        <h2 className="TodoCounter" >Done {completedTodos} of {totalTodos} todos</h2>
    );
}

export { TodoCounter };