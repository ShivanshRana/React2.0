import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user="shivansh" age={18} />
      <Card user="paras" age={20} />

    </div>
  )
}

export default App
