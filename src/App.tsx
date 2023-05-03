import React, { useState } from 'react';

import './App.css';
import Todos from './component/Todos';
import Todo from './component/models/Todo';
import TodoForm from './component/TodoForm';





function App() {
const [todos,setTodos]=useState<Todo[]>([])

  const todoHandler=(todoText:string)=>{
    const newTodo=new Todo(todoText)

    setTodos((prev)=>[newTodo,...prev])

  }

  const deleteTodo=(todoId:string)=>{
const updatedTodos=todos.filter((todo)=>todoId!==todo.id)

setTodos(updatedTodos)
  }
  return (
    <div className="App">
      <TodoForm onAddTodo={todoHandler}/>
      <Todos items={todos} removeTodo={deleteTodo}/>
    </div>
  );
}

export default App;
