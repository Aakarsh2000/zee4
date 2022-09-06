import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <>

        <nav>
            
              <NavLink to='/'> <h2>  HOME</h2> </NavLink>
              <NavLink to='/aboutus'>  <h2>  About Us </h2> </NavLink>
              <NavLink to='/teams'>  <h2> Teams </h2> </NavLink>
            
           

        </nav>
        
        
    </>
  )
}

export default NavBar