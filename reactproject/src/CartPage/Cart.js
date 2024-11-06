import React, { useState } from 'react'

import CartItems from './CartItems'
import Totalprice from './Totalprice';
let cartItem = [
    {id:1,label:"biryani",price:70,quantity:1},
    {id:2,label:"drink",price:10,quantity:1},
    {id:3,label:"pizza",price:20,quantity:1},
]

const Cart = () => {
    let [cart,setCart] = useState(cartItem);
    const totalprice = cart.reduce(function(bag,item){
       return bag + (item.price * item.quantity)
    },0)
    const handleQuantity = (id,value)=>{
        let cartUpdate= cart.map((item)=>{
          return item.id === id ? {...item, quantity:item.quantity + value}: item
        })
        setCart(cartUpdate)
     }
  return (
    <div>
        {cart.map((item=>{
          return  <CartItems key={item.id} {...item} handleQuantity={handleQuantity}/>
        }))}
        <Totalprice totalprice={totalprice}/>
    

    </div>
  )
}

export default Cart
