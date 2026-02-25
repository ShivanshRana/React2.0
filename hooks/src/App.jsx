import React from "react";
import { useState } from "react";

// const App = () => {
//   const [first, setfirst] = useState(0)
//   function decrement(){
//     setfirst(first-1)
//   }
//   return (
//     <div className='main'>
//       <p>value of count is {first} </p>
//       <button onClick={()=>{
//         setfirst(first+1)
//       }} className='inc' >increase</button>
//       <button onClick={decrement} className='dec'>decrease</button>
//       <button onClick={()=>{
//         setfirst(first+5)
//       }}>jump 5 </button>
//     </div>
//   )
// }
// const App = () => {
//   const [name, setName] = useState({user:'shivansh',age:21})

//   function changeName(){
//   //  const df={...name} // because it store reference
//   //   df.user='paras'
//   //   df.age=20
//   //   setName(df)

//   // setName(prev=>({...prev,user:'paras',age:20}))

//   }

//   return (
//     <div>
//       <h1>name is {name.user} and age is {name.age}</h1>
// <button onClick={changeName}>press</button>

//     </div>
//   )
// }
// const App = () => {
//   const [name, setName] = useState(10);

//   function increase(){
//     setName(prev=>(prev+1))  // batch update otherwise simple 1 hi baar update hoga due to unsynchronize
//     setName(prev=>(prev+1))
//     setName(prev=>(prev+1))
//   }

//   return (
//     <div>
//       <h1> count = {name}</h1>
//       <button onClick={increase}>press</button>
//     </div>
//   );
// };


// ++++++++++++++++++++++Form Handling and two way data Binding++++++++++++ 
const App = () => {
 
const [title, setTitle] = useState('')
const submitHandler = (e)=>{
  e.preventDefault()
console.log('form submitted by',title)
setTitle('')

}

  return (
    <div>
     <form onSubmit={(e)=>{
     
      submitHandler(e)
     }}>
      <input type="text" placeholder="enter name" value={title} onChange={(e)=>{
      setTitle(e.target.value)
      console.log(e.target.value);
      
      }} />
      <button type="submit">Submit</button>
     </form>
    </div>
  );
};

export default App;
