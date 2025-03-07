import React, { useEffect, useState } from 'react'
import Noteslist from './Noteslist';

const Notes = () => {
    let [note,setNote] = useState([]);
    const [input,setinput] = useState('');
    const newinput = {
      course : input
    }
    useEffect(()=>{
        fetch('http://localhost:3929/note',{
            method:"GET",
           headers : {"Authorization" : `bearer ${localStorage.getItem("token")}`}
        }).then(res => res.json()).then(res => {console.log(res.data); setNote(res.data)}).catch(err => console.log(err));
    },[]);
    const addNote = ()=>{
      
        fetch('http://localhost:3929/note/create',{
            method:"POST",
            body: JSON.stringify(newinput),
           headers : {"Authorization" : `bearer ${localStorage.getItem("token")}`,
           "Content-Type" : "application/json",
          }
        }).then(res => res.json()).then(res => {console.log(res); }).catch(err => console.log(err));
    }
    const editNote = (id)=>{
      
      console.log(id)
        fetch(`http://localhost:3929/note/edit/${id}`,{
            method:"PATCH",
            body: JSON.stringify(),
           headers : {"Authorization" : `bearer ${localStorage.getItem("token")}`,
           "Content-Type" : "application/json",}
        }).then(res => res.json()).then(res => {console.log(res.data); }).catch(err => console.log(err));
    }
    const deleteNote = (id)=>{
      console.log(id);

        fetch(`http://localhost:3929/note/delete/${id}`,{
            method:"DELETE",
           headers : {"Authorization" : `bearer ${localStorage.getItem("token")}`}
        }).then(res => res.json()).then(res => {console.log(res.data); }).catch(err => console.log(err));
    }
  return (
    <>
    <h1>Notes</h1>
    {/* <p>{note}</p> */}
    <input type='text' placeholder='enter text' value={input} onChange={(e)=>{setinput(e.target.value)}}/>
    <button onClick={()=>{addNote()}} >add</button>
    {
    note.map((notes)=>{
    return <Noteslist note={notes} editNote={editNote} deleteNote={deleteNote} key={notes._id}/>
    })}
    
    </>
  )
}

export default Notes
