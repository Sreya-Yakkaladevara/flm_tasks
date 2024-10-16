import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)
  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <div>
        <button className='btn' onClick={()=>{setCount(count-1)}}>-</button>
        <button className='btn' onClick={()=>{setCount(count+1)}}>+</button>
        <button className='btn' onClick={()=>{setCount(count*2)}}>double</button>

      </div>
    </div>
  )
}

export default Counter
