// import React, { useReducer } from 'react'
// function ReducerFunction(state,action){
//   if(action.type === "INC"){
//     return state=state+1;
//   }
//   if(action.type === "DEC"){
//     if(state>0){

//         return state=state-1;
//     }
//     else{
//         return 0
//     }
//   }
//   if(action.type === "RESET"){
//     return state=0;
//   }
  
// }
// const UseReducer = () => {
//     const [state,dispatch]=useReducer(ReducerFunction,0);
//   return (
//     <div>
//       <h1>Count:{state}</h1>
//     <button onClick={()=>dispatch({type:"INC"})}>+</button>
//     <button onClick={()=>dispatch({type:"DEC"})}>-</button>
//     <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>

//     </div>
//   )
// }

// export default UseReducer
import React from 'react'
import Todo from './Todo'

const UseReducer = () => {
  return (
    <div>
      <Todo></Todo>
    </div>
  )
}

export default UseReducer

