import React from "react"
import Card from "./components/Card"
const App = () => {
  const jobs = [
  {
    name: "Amazon",
    salary: "$120/hr",
    location: "Mumbai, India",
    logo: "https://imgs.search.brave.com/p0vWITbsnHZ2VBfBYaCxNJRHh0Z6zKsksoFbdG0hUfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdmVjdG9yLWpv/Yi1maW5kZXItbG9n/by1kZXNpZ24tdGVt/cGxhdGVfOTk1NzU0/LTI3LmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
  },
  {
    name: "Meta",
    salary: "$110/hr",
    location: "Bangalore, India",
    logo: "https://imgs.search.brave.com/p0vWITbsnHZ2VBfBYaCxNJRHh0Z6zKsksoFbdG0hUfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdmVjdG9yLWpv/Yi1maW5kZXItbG9n/by1kZXNpZ24tdGVt/cGxhdGVfOTk1NzU0/LTI3LmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
  },
  {
    name: "Google",
    salary: "$150/hr",
    location: "Hyderabad, India",
    logo: "https://imgs.search.brave.com/p0vWITbsnHZ2VBfBYaCxNJRHh0Z6zKsksoFbdG0hUfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdmVjdG9yLWpv/Yi1maW5kZXItbG9n/by1kZXNpZ24tdGVt/cGxhdGVfOTk1NzU0/LTI3LmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
  },
  {
    name: "Microsoft",
    salary: "$130/hr",
    location: "Pune, India",
    logo: "https://imgs.search.brave.com/p0vWITbsnHZ2VBfBYaCxNJRHh0Z6zKsksoFbdG0hUfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdmVjdG9yLWpv/Yi1maW5kZXItbG9n/by1kZXNpZ24tdGVt/cGxhdGVfOTk1NzU0/LTI3LmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
  },
  {
    name: "Apple",
    salary: "$140/hr",
    location: "Delhi, India",
    logo: "https://imgs.search.brave.com/p0vWITbsnHZ2VBfBYaCxNJRHh0Z6zKsksoFbdG0hUfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdmVjdG9yLWpv/Yi1maW5kZXItbG9n/by1kZXNpZ24tdGVt/cGxhdGVfOTk1NzU0/LTI3LmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
  },
  {
    name: "Netflix",
    salary: "$125/hr",
    location: "Remote",
    logo: "https://imgs.search.brave.com/p0vWITbsnHZ2VBfBYaCxNJRHh0Z6zKsksoFbdG0hUfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdmVjdG9yLWpv/Yi1maW5kZXItbG9n/by1kZXNpZ24tdGVt/cGxhdGVfOTk1NzU0/LTI3LmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
  },
  {
    name: "Adobe",
    salary: "$105/hr",
    location: "Noida, India",
    logo: "https://imgs.search.brave.com/p0vWITbsnHZ2VBfBYaCxNJRHh0Z6zKsksoFbdG0hUfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdmVjdG9yLWpv/Yi1maW5kZXItbG9n/by1kZXNpZ24tdGVt/cGxhdGVfOTk1NzU0/LTI3LmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
  },
  {
    name: "Tesla",
    salary: "$160/hr",
    location: "Chennai, India",
    logo: "https://imgs.search.brave.com/p0vWITbsnHZ2VBfBYaCxNJRHh0Z6zKsksoFbdG0hUfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdmVjdG9yLWpv/Yi1maW5kZXItbG9n/by1kZXNpZ24tdGVt/cGxhdGVfOTk1NzU0/LTI3LmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
  }
];



return ( <div className="parent">

 {
  jobs.map(function(ele){
return <Card company ={ele.name} salary={ele.salary} location={ele.location} logo={ele.logo}  />
  })
 }
</div>
  
)
}
export default App
