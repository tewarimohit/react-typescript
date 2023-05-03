import React, {useRef} from 'react'

const TodoForm:React.FC<{onAddTodo:(text:string)=> void}> = (props) => {

    const inputTextRef=useRef<HTMLInputElement>(null)

    const submitHandler=(event: React.FormEvent)=>{
event.preventDefault()

const todoText=inputTextRef.current!.value;

if(todoText?.trim().length===0){
    return;
}


props.onAddTodo(todoText);
inputTextRef.current!.value='';

    }

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor='todo'>Text Input</label>
        <input ref={inputTextRef} type='text' name='todo' id='todo'/>
        <button>Submit</button>
    </form>
  )
}

export default TodoForm