import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './singlepage.css'
const Singlepage = () => {
    let param = useParams();
  
    let [drinksById,setdrinksById] = useState([]);
    async function fetchingByIddata(){
        let drinkdata = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${param.id}`);
        let response = await drinkdata.json();
      console.log(response.drinks)
      setdrinksById(response.drinks)
    }
    useEffect(()=>{
       fetchingByIddata()
    },[])

  return (
    <div className='subpage'>
        <Link to='/' className='returnbtn'>Back Home</Link>
        <div className='container'>
        {drinksById.map((item)=>{
          return <div key={item.idDrink} className='drinkDetail'>
            <div className='drinkimg'>
              <img src={item.strDrinkThumb}/>
            </div>
            <div className='items'>
              <p><span>Name : </span>{item.strDrink}</p>
              <p><span>Category : </span>{item.strCategory}</p>
              <p><span>Glass : </span>{item.strGlass}</p>
              <p><span>Ingredients : </span>{item.strIngredient1},{item.strIngredient2},{item.strIngredient3},{item.strIngredient4}{item.strIngredient5}{item.strIngredient6}</p>
              <p><span>Instructions : </span>{item.strInstructions}</p>
            </div>
          </div>
        })}
      </div>
    </div>
    
  )
}

export default Singlepage
