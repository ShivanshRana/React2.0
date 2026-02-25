import React from "react";

const App = () => {
  const mouseMove = (val)=> {
    console.log("speed is "+val);
  }
  return (
   
    
      <div onWheel={(elem)=>{
         mouseMove(elem.clientX)
        
      }}>
      {/* <input
        onChange={(elem) => {
          btnClicked(elem.target.value)
        }}
        type="text"
        placeholder="enter name"
      /> */}
      
      <div className="abc"></div>
      <div className="def"></div>
      <div className="ghi"></div>
      </div>
   
  );
};

export default App;
