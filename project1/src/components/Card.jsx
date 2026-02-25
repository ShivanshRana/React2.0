const Card = (props)=> {
    return (
        
        <div className="card">
               <img src="https://plus.unsplash.com/premium_photo-1769293785689-f8f17e6cb4e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="img" />
               <h1>{props.user} {props.age} </h1>
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam ratione, vero saepe iusto nisi!</p>
        </div>
        
    )
}

export default Card;