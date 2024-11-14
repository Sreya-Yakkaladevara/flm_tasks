import React, { useReducer } from 'react'
// import UseReducer from './UseReducer'
import TodoItem from './TodoItem';
import TodoItems from './TodoItems';
   
const reducerFunction=(state,action)=>{
  switch(action.type){
    case "Add_task":
      return [...state,{id: Date.now(),title:action.payload,status:false}];
    case "Delete_task" : 
      return state.filter((item)=> item.id !== action.payload );
      case "Update_task" : 
      return state.map((item)=>item.id== action.payload ? {...item,status:!item.status}: item)
  }
  
}

const Todo = () => {
    let intialItems=[
        {id : 1,title:"Learn Reducer",status:false},
        {id : 2,title:"Learn React",status:false},
        {id : 3,title:"Learn Node",status:false},
      ]

    let addTask = (value)=>{
       dispatch({type:"Add_task",payload:value})
   }
   let DeleteTask = (id)=>{
    dispatch({type:"Delete_task",payload:id})
}
let UpdateTask= (id)=>{
  dispatch({type:"Update_task",payload:id})
}
    let [state,dispatch] = useReducer(reducerFunction,intialItems);
  return (
    <div>
      <TodoItem addTask={addTask}/>
      {
        state.map((item)=>{   

            return <TodoItems key={item.id} todo={item} DeleteTask={DeleteTask} UpdateTask={UpdateTask}/>
        })
      }
    </div>
  )
}

export default Todo
