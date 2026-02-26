import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
   const Navigate =  useNavigate()
  return (
    <div className='navbar'>
      <button onClick={()=>{
        Navigate('/')
      }}>Back to Home</button>
      <button onClick={()=>{
        Navigate(-1)
      }}>Prev</button>
      <button onClick={()=>{
        Navigate(-1)
      }}>Next</button>
    </div>
  )
}

export default Navbar2
