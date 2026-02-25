import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
//   const [first, setfirst] = useState([])
  
//  const  getData = async  ()=> {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // console.log(response);
//     // const data = await(response.json())
//     // console.log(data);
//     const response =  await axios.get('https://jsonplaceholder.typicode.com/todos')

//    setfirst(response.data)
//   }
//   return (
//     <div>
//       <button onClick={getData}>
//   getData
//       </button>
//       <div>
//         {first.map(function(elem,idx){
//            return <h3>{elem.title}{idx}</h3>
//         })}
//       </div>
//     </div>
//   )
const [first, setfirst] = useState(0)
const [second, setsecond] = useState(10)
const SetOne = ()=>{
  setfirst(first+1)
}
const SetTwo = ()=>{
  setsecond(second+1)
}
  useEffect(function(){
  console.log('useEffect is running')
  }, [first])
return(
  <div>
  <button onClick={SetOne
  }>
    A:{first}
  </button>

  <button onClick={SetTwo}>B:{second}</button>
  </div>
)

}

export default App
