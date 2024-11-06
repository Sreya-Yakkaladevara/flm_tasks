import React, { useState } from 'react'
import CoffeeCard from './CoffeeCard'
import './coffee.css'
const Coffee = () => {
  let [showlist,setshowlist] = useState(false)
  return (
    <>
      <button className='coffeebtn' onClick={()=>setshowlist(true)}>Get Coffee</button>
      {showlist&&<CoffeeCard/>}
    </>
  )
}

export default Coffee
