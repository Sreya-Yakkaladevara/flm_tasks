import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Newsletter from './Newsletter'
import Navbar from './Navbar'
import Error from './Error'
import Singlepage from './Singlepage'
const Cocktail = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/newsletter' element={<Newsletter/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/:id' element={<Singlepage/>}/>
    </Routes>
    </>
  )
}

export default Cocktail
