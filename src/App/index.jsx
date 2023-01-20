import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { MyLoader } from "../MyLoader/MyLoader";
import { Error } from "../Error/Error";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";

function AppUI() {

    const {
        error, 
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos
    } = React.useContext(TodoContext);

    return (
        <div className="Todo_Container">
        <div className="Todo_Box">
            <TodoCounter />
            <TodoSearch /> 
            <CreateTodoButton />
            
                <TodoList>
                    {error && <Error error={error}/>}
                    {loading && <MyLoader />}
                    {(!loading && !searchedTodos.length) && <EmptyTodos />}
                    {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={completeTodos(todo.id)}
                        onDelete={deleteTodos(todo.id)}
                    />
                    ))}
                </TodoList>

            <Modal>
                <TodoForm />
            </Modal>
        </div>
        </div>
  );
}

export { AppUI } ;