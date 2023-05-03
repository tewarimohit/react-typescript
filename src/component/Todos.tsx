import React from 'react'
import Todo from './models/Todo'
import TodoList from './TodoList'

const Todos: React.FC<{items:Todo[],removeTodo:(todoId:string)=>void}> = (props) => {
  return (
    <div><ul>
        {props.items.map((item,index)=><TodoList key={index} text={item.text} id={item.id} removeTodo={props.removeTodo}/>)}
        </ul></div>
  )
}

export default Todos