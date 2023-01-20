import React from 'react';
import {useLocalStorage} from '../CustomHooks/localStorageHook';

const TodoContext = React.createContext();

const defaultTodos = [
  // {
  //   id: 1,
  //   text: 'cortar cebolla',
  //   completed: true,
  //   deleted: false
  // },
  // {
  //   id: 2,
  //   text: 'Tomar aguita',
  //   completed: false,
  //   deleted: false
  // },
  // {
  //   id: 3,
  //   text: 'llamar abuela',
  //   completed: false,
  //   deleted: false
  // }
];

function TodoProvider(props) {
    const {
        item: todos, 
        saveItem: setTodos, 
        loading,
        error
      } = useLocalStorage('todos', defaultTodos);
      
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => todo.completed && !todo.deleted ).length;
    
      const totalTodos = todos.filter(todo => !todo.deleted).length;
    
      let searchedTodos = todos
                            .filter
                            (
                              todo => 
                                todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) && !todo.deleted
                            );
    
      if (!searchValue.length) {
        searchedTodos = todos.filter(todo => !todo.deleted);
      }
    
      let completeTodos = (id) => {
        return () => {
          let newTodos = [...todos];
    
          let indexTodo = newTodos.findIndex(todo => todo.id === id);
          newTodos[indexTodo].completed = true;
          setTodos(newTodos);
        }
      }

      const addTodo = (text) => {
       
          console.log('entroaqui');
          let newTodos = [...todos];

          let lastElement = newTodos[newTodos.length-1];

          if(!lastElement){
            newTodos.push({
              id: 1,
              text: text,
              completed: false,
              deleted: false
            });
          }else{
            let newId = lastElement.id + 1;
    
            newTodos.push({
              id: newId,
              text: text,
              completed: false,
              deleted: false
            });
          }
          setTodos(newTodos);
      }
    
      let deleteTodos = (id) => {
        return () => {
          let newTodos = [...todos];
    
          let indexTodo = newTodos.findIndex(todo => todo.id === id);
          newTodos[indexTodo].deleted = true;
    
          setTodos(newTodos);
        }
      }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            addTodo,
            deleteTodos,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
    
}

export {TodoContext,TodoProvider}