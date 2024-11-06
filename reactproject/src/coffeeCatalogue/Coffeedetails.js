import React from 'react'

const Coffeedetails = ({title,description,ingredients,price}) => {
  return (
    <div className='coffeedetails'>
        <h2 className='title'>{title}</h2>
        <p className='cost'>₹ {price}</p>
        <p className='description'>{description}</p>
        <ul>
            <p>ingredients</p>
            {
               ingredients.map((item)=>{
                return   <li key={Date.now()*Math.random()}>{item}</li>
               })
            }
        
        </ul>
    </div>
  )
}

export default Coffeedetails
