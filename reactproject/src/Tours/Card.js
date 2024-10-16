import React from 'react'
import './card.css'
const Card = ({heading,image}) => {
  return (
    <div className='Card'>
      <div className='image'><img src={image}/></div>
      <div className='Carddetails'>
        <h3 className='heading'>{heading}</h3>
        <p className='para'>Lorem fthe svtgevc hggweygcyegc eheuhsbew sge ysdh hegdgddg  </p>
        <button className='Cardbtn'>Not Interested</button>
      </div>
    </div>
  )
}

export default Card
