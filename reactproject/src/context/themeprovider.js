import React, { Children, createContext, useState } from 'react'
export const ThemeContext = createContext();
export const Themeprovider = (children) => {
    const [theme,settheme] = useState();
    const toggletheme = ()=>{
        settheme(theme === "dark" ? "bright" : "dark" )
    }
  return (
    <ThemeContext.provider value={{theme,toggletheme}}>{Children}</ThemeContext.provider>
  )
}

