import React from 'react'

const TodoList: React.FC<{text:string,id:string,removeTodo:(id:string)=>void}> = (props) => {
    
    
  return (
    <li style={{cursor:'pointer'}} onClick={()=>props.removeTodo(props.id)}>{props.text}</li>
  )
}

export default TodoList