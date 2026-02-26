import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import NotFound from './Pages/NotFound'
import ContactDetail from './Pages/ContactDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div>
  <Navbar/>
  <Navbar2/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/contact/:id'  element={<ContactDetail/>} /> {/* THIS IS DYNAMIC ROUTING */}
       <Route path='/product' element={<Product />}> {/* nested routing */}
       <Route path='men' element={<Men/>}/>
       <Route path='women' element={<Women/>}/>
       <Route />
        </Route >
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </div>
  )
}

export default App
