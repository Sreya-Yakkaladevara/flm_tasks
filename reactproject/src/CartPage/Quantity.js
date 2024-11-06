import React from 'react'

const Quantity = ({quantity,id,handleQuantity}) => {
  return (
    <div>
      <button onClick={()=>handleQuantity(id,-1)}>-</button>
      <p>{quantity}</p>
      <button onClick={()=>handleQuantity(id,1)}>+</button>
    </div>
  )
}

export default Quantity
