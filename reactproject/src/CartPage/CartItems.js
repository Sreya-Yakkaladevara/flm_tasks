import React from 'react'
import LabelPage from './LabelPage'
import Quantity from './Quantity'

const CartItems = ({id,label,price,quantity,handleQuantity}) => {
  return (
    <>
    <div>
      <LabelPage label={label} price={price}/>
      <Quantity quantity={quantity} id={id} handleQuantity={handleQuantity}/>
    </div>
    </>
  )
}

export default CartItems
