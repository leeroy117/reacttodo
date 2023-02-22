import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodoContext } from "../../TodoContext";
import { EmptyTodos } from "../../ui/EmptyTodos/EmptyTodos";
import { Error } from "../../ui/Error/Error";
import { MyLoader } from "../../ui/MyLoader/MyLoader";
import { TodoItem } from "../../ui/TodoItem/TodoItem";
import { TodoList } from "../../ui/TodoList/TodoList";

function TodoListPage() {
    const navigate = useNavigate();
    const {getters, setters} = useTodoContext();
    const {
        error,
        loading,
        totalTodos,
        completedTodos,
        // openModal,
        searchValue,
        searchedTodos,
    } = getters;

    const {
        completeTodos,
        addTodo,
        deleteTodos,
        setSearchValue,
        // setOpenModal,
        syncronizeTodos
    } = setters;

    return ( 
        <>
            <TodoList
                error={error}
                loading={loading}
                searchText={searchValue}
                totalTodos={totalTodos}
                searchedTodos={searchedTodos}

                onError={()=> <Error error={error}/>}
                onLoading={()=> <MyLoader />}
                onEmpty={()=> <EmptyTodos />}
                onSearchedTodos={(text) => (<p>Any match for {text}</p>)}

                render={(todo) => (
                    <TodoItem    
                        key={todo.id} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={completeTodos(todo.id)}
                        onDelete={deleteTodos(todo.id)}
                        onEdit={()=>{
                            navigate(`/edit/${todo.id}`,{
                                state: {
                                    id: todo.id,
                                    text: todo.text
                                }
                            })
                        }}
                    />
                    )
                }
            >
                {/* {(todo)=>(
                        <TodoItem 
                        key={todo.id} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={completeTodos(todo.id)}
                        onDelete={deleteTodos(todo.id)}
                    />
                )} */}
            </TodoList>
        </>
     );
}

export { TodoListPage } ;