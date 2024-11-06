import React from 'react'
import Card from './Card'
import './tour.css'
const Tours = () => {
  return (
    <>
    <h1 className='Title'>Our Tours</h1>
    <div className='ToursDisplay'>
        <Card heading={"Best of paris"} image={'https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg'}/>
        <Card heading={"Best of vizag"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s"}/>
        <Card heading={"Best of hyderabad"} image={"https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-trees-of-yellow-leaves-free-image.jpeg?w=600&quality=80"}/>
        <Card heading={"Best of banglore"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s"}/>
        <Card heading={"Best of kochi"} image={"https://thumbs.dreamstime.com/z/beautiful-nature-landscape-scenes-maggie-valley-north-carolina-271834529.jpg"}/>

    </div>
    </>
    
  )
}

export default Tours
