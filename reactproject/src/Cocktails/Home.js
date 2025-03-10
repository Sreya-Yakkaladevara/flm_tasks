import React, { useState } from 'react'
import Button from './Button'
import './home.css'
import Apidata from './Apidata';
import { useNavigation } from 'react-router-dom';
const Home = () => {
  
  // const isNavigation = navigation.state === 'loading';
   let [input,setinput] = useState("");
   const handleChange = (event)=>{
    setinput(event.target.value)
   }
  return (
    
    
      <>
    <div className='searchbtn'>
      <input type='text' className='text' value={input} onChange={handleChange}/>
      <Button btn={"search"} />
      
    </div>
    <Apidata input={input}/>

    </>
  )
}

export default Home
