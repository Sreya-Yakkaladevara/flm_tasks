import React from 'react'
import { ADD, SUB } from '../Action';

const intialFunction = (state,{action,payload}) => {
  switch (action.type) {
    case ADD:
        return {...state,count:state.count+payload}
    case SUB:
        return  {...state,count:state.count-payload}
    default:
        return state
  }
}

export default intialFunction
