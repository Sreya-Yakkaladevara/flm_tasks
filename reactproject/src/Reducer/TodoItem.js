import React, { useState } from 'react'

const TodoItem = ({addTask}) => {
    let[value,setvalue] = useState("");
  return (
    <div>
      <input type='text' value={value} onChange={(e)=>setvalue(e.target.value) }/>
      <button onClick={()=>{addTask(value)
        setvalue("")
      }}>Add Todo</button>

    </div>
  )
}

export default TodoItem
