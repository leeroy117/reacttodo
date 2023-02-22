import React from "react";
import {HomePage} from './HomePage/HomePage';
import './index.css';
import {TodoProvider} from '../TodoContext/index'
import { HashRouter, Route, Routes } from "react-router-dom";
import {NewTodo} from "./NewTodo/NewTodo";
import {EditTodo} from "./EditTodo/EditTodoPage";
import { TodoListPage } from "./TodoListPage/TodoListPage";

function App() {

  return (
    <HashRouter>
      <TodoProvider>
        <Routes>
            <Route path="/" element={<HomePage />} >
              <Route path="/list" element={<TodoListPage />}/>
              <Route path="/new" element={<NewTodo />}/>
              <Route path="/edit/:id" element={<EditTodo />}/>
            </Route>
           
            <Route path="*" element={<p>404 not found</p>}/>
        </Routes>
      </TodoProvider>
    </HashRouter>
  );

}

export default App;
