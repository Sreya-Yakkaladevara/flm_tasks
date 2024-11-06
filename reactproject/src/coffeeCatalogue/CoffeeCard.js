import React, { useEffect, useState } from 'react'
import Coffeedetails from './Coffeedetails';
import './coffecard.css'
const CoffeeCard = () => {
    let url = "http://localhost:3000/coffee";
    let [coffee,setcoffee] = useState([]);
    useEffect(()=>{
      
     let coffeedata = async ()=>{
      let data = await fetch(url);
      let result= await data.json();
      console.log(result)
      setcoffee(result)
     }
     coffeedata()
    },[])
  return (
    <div className='CoffeeContainer'>
      {
        coffee.map((item)=>{
          return <div className='CoffeeCard' key={item.id}>
              <div className='coffeeimg'>
                <img src={item.image}/>
              </div>
              <Coffeedetails {...item}/>
          </div>
        })
      }
    </div>
  )
}

export default CoffeeCard
