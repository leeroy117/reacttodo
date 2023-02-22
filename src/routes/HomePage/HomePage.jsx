import React from "react";
import { TodoCounter } from "../../ui/TodoCounter/TodoCounter"
import { TodoSearch } from "../../ui/TodoSearch/TodoSearch";
import { TodoHeader } from "../../ui/TodoHeader/TodoHeader";
import { TodoList } from "../../ui/TodoList/TodoList";
import { TodoItem } from "../../ui/TodoItem/TodoItem";
import { CreateTodoButton } from "../../ui/CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../../TodoContext";
import { useTodoContext } from "../../TodoContext";
import { Modal } from "../../ui/Modal/Modal";
import { TodoForm } from "../../ui/TodoForm/TodoForm";
import { MyLoader } from "../../ui/MyLoader/MyLoader";
import { Error } from "../../ui/Error/Error";
import { EmptyTodos } from "../../ui/EmptyTodos/EmptyTodos";
import {ChangeAlert} from "../../ChangeAlert/ChangeAlert";
import { Outlet, useNavigate } from "react-router-dom";

function HomePage() {
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

    // const [getters, setters] = React.useContext(TodoContext);
    // const {
    //     error,
    //     loading,
    //     totalTodos,
    //     completedTodos,
    //     openModal,
    //     searchValue,
    //     searchedTodos,
    // } = getters;
    // const {
    //     completeTodos,
    //     addTodo,
    //     deleteTodos,
    //     setSearchValue,
    //     setOpenModal,
    //     syncronizeTodos
    // } = setters;



    return (
        <div className="Todo_Container">
        <div className="Todo_Box">
            <TodoHeader 
                loading={loading}
            >
                <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/> 
            </TodoHeader>
            
            
            <CreateTodoButton  
                // openModal={openModal} 
                // setOpenModal={setOpenModal}
                onClickFunction={() => {
                    navigate('/new');
                }}
            />

            <Outlet />
            
            {/* <TodoList
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
                    />
                    )
                }
            > */}
                {/* {(todo)=>(
                        <TodoItem 
                        key={todo.id} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={completeTodos(todo.id)}
                        onDelete={deleteTodos(todo.id)}
                    />
                )} */}
            {/* </TodoList> */}

            <ChangeAlert
                syncronize={syncronizeTodos}
            />
            

            {/* <Modal 
                id='modal' 
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <TodoForm 
                    addTodo={addTodo}
                    setOpenModal={setOpenModal}
                    // openModal={openModal}
                />
            </Modal> */}
        </div>
        </div>
  );
}

export { HomePage } ;