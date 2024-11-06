import React, { useContext } from 'react'
import './theme.css'
import { ThemeContext } from './themeprovider';

const Navbar = () => {
    let {theme} = useContext(ThemeContext);

  return (
    <div className='theme'>
        <h1>Logo</h1>
        <button>Login</button>
        <button>Logout</button>

    </div>
  )
}

export default Navbar
