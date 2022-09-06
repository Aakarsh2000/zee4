import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Teams() {
  return (
    <div>

       <h1>TEAMS </h1> 
        
           <Link to='/teams/india'> <h3> INDIA</h3> </Link>  &nbsp; &nbsp;&nbsp; 
           <Link to='/teams/pakistan'><h3> PAKISTAN</h3></Link>
            <br></br><br></br>
            <Outlet/>

            
            
            
        
        
        
        </div>
  )
}

export default Teams