import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <h1>Shivansh</h1>
      <div className='abc'>
        <Link to='/' >Home</Link>
        <Link to='/about' >About Us</Link>
        <Link to='/contact' >Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
