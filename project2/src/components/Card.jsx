import React from 'react'

const Card = (props) => {
  return (
    <div>
     
<div className="card">
    
  <div className="top">
<img src={props.logo} alt=""  />
<button>Save</button>
  </div>
  <div className="center">
    <h3>{props.company}</h3>
    <h2>Senior UI/UX Designer</h2>
   <p>Part Time / Full Time</p>
  </div>
  <div className="bottom">
   
   <h3>{props.salary} </h3>
   {props.location}
   <button>Apply Now</button>
  </div>
</div>
  </div>
    
  )
}

export default Card
