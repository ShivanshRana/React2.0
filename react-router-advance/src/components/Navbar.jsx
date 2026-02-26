import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Shivansh</h1>
      <div className="nav-links">
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
