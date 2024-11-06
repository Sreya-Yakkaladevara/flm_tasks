import React from 'react'
import Button from './Button'
import './newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletterCard'>
      <div className='detailcard'>
          <h4>Our NewsLetter</h4>
          <form className='formdetails' method='post'>
            <label>Name
            </label>
            <input type='text'/>
            <label>LastName</label>
            <input type='text'/>
            <label>Email</label>
            <input type='email'  defaultValue='test@test.com'/>
          </form>
          <Button btn={"Submit"}></Button>
      </div>
      
    </div>
  )
}

export default Newsletter
