// action
// reducer
// slice
// store
// state

// on click --> Action Dispatch  --> Store --> Reducer --> logic execute--> Store --> state update --> value update

import { useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reducer, {incrementByAmount, decrement, increment, reset } from './features/counter/counterSlice'

const App = () => {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  const [first, setfirst] = useState([])

  function handleincrement(){
    dispatch(increment())
  }
  function handledecrement(){
    dispatch(decrement())
  }
  function handlereset(){
    dispatch(reset())
  } 
  function handleamount(){
    dispatch(incrementByAmount(first))
  }
  return (
    <div className='container'>
      <button onClick={handleincrement}>+</button>
      <p>Count:{count}</p>
      <button onClick={handledecrement}>-</button>
      <button onClick={handlereset}>Reset</button>
      <input type="text"
      placeholder='enter amount'
      // value={first} 
       onChange={(e)=>setfirst(e.target.value)} />
    <button onClick={handleamount}>add Amount</button>
    </div>
  )
}

export default App
