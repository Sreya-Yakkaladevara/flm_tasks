import React from 'react'

const TodoItems = ({todo,DeleteTask,UpdateTask}) => {
  return (
    <div>
       <li>{todo.title}-{todo.status?" completed" : " Not completed"}
        <button onClick={()=>{UpdateTask(todo.id)}}>{todo.status ? "undo" : "Done"}</button>
       <button onClick={()=>{DeleteTask(todo.id)}}>Delete</button>

       </li>
    </div>
  )
}

export default TodoItems
