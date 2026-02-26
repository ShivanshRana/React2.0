import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className="page container">
      <Link to='/product/men'>Men's Collection</Link>
      <Link to='/product/women'>Women's Collection</Link>
      <h1>product page</h1>
      <Outlet/>
    </div>
  )
}

export default Product
