import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('dark')
  return (
    <div>
      <Navbar theme={theme}>
       <h1>childre1 of navbar</h1>
       <h1>children2 of navbar</h1>
      </Navbar>
    </div>
  )
}

export default App
