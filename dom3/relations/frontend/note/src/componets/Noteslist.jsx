import React from 'react'

const Noteslist = ({note,editNote,deleteNote}) => {
   const {_id,course} = note;
   
  return (
    <div>
      <h1>{course}</h1>
      <button onClick={()=>{editNote(_id)}}>Edit</button>
      <button onClick={()=>{deleteNote(_id)}}>Delete</button>
    </div>
  )
}

export default Noteslist
