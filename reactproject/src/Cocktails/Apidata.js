import React, { useEffect, useState } from 'react'
import { Link,  useNavigation } from 'react-router-dom'

import './apidata.css'
const Apidata = () => {
  let [drinks,setdrinks] = useState([])
  
  async function fetchingdata(){
    let data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
`);
      let response = await data.json();
      setdrinks(response.drinks)
      console.log(response.drinks)
 } 
 useEffect(()=>{
  fetchingdata()
 },[])
  return (
    <><h1 className='cardheading'>Cocktails</h1>
    <div className='cardContainer'>
      {
      drinks.map((item)=>{
        return <div key={item.idDrink} className='card'>
            
              <img src={item.strDrinkThumb} className='cardimg'/> 
              <h2 className='cardglass'>{item.strGlass}</h2>
              <p className='cardglass'>{item.strCategory}</p>
              {/* <Button className='sk' btn={"Details"}/> */}
              <Link to={item.idDrink} className='drinkpage'>Details</Link>
          </div> 
      })
      }
    </div>
    </>
  )
}

export default Apidata
