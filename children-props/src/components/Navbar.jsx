import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
  return (
    <div>
     <h1>Shivansh </h1>
     <h2>{props.children[1]}</h2>
     <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
