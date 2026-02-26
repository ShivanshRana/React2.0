import React from 'react'

import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import Nav2 from './Nav2'

const Navbar = () => {
    const [theme] = useContext(ThemeDataContext)
  return (
    <div className={theme}>
     <h1> Shivansh </h1>
   
     <Nav2/>
    </div>
  )
}

export default Navbar
