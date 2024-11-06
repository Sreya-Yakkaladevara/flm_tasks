import React from 'react'
import { NavLink } from 'react-router-dom'
import  './navbar.css'
const Navbar = () => {
    const links = [{
        path:'/',text:"Home"
    },
    {
        path:'/about',text:"About"
    },
    {
        path:'/newsletter',text:"Newsletter"
    }
  ]

  return (
    <div className='nav'>
       <h1 className='heading' >Cocktails Website</h1> 
       <div className='navlist'>
        
        {links.map((link)=>{
            return <NavLink to={link.path} className="navlink" key={link.path}>
                {link.text}
            </NavLink>
        })}
    </div>
    </div>
    
  )
}

export default Navbar
