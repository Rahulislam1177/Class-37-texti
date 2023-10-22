
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
   <ExternalUser></ExternalUser>
   

    </div>
  )}

  function ExternalUser (){

    const [users, setUsers] = useState([])
    console.log(users);
   
    useEffect(()=>{
      fetch('https://randomuser.me/api/?results=50')
      .then(res=> res.json())
      .then(data => setUsers(data.results))
    },[])

   return(
    
    <div>
      <h1>Show all user</h1>
      {
       users.map(user => <User name={user.name}></User>)
      }
    </div>
   )
   }

   function User( props){
   onsole.log(props.name.last);
    return(
      <div>
        <h1>User name {props.name.last} </h1>
      </div>
    )
  }
 


export default App
