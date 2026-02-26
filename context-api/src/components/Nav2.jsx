import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Nav2 = () => {
   const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div>
       <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <h2>{theme}</h2>
      <h1></h1>
    </div>
  )
}

export default Nav2
