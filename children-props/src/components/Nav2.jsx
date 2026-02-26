import React from 'react'

const Nav2 = (props) => {
  return (
    <div>
       <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <h1>{props.themes}</h1>
    </div>
  )
}

export default Nav2
