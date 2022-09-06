import React from 'react'
import { Link } from 'react-router-dom'

function India() {
  return (
    <div>
      <h2> INDIAN tEAM</h2>
      <ul>
       <Link to='/rohit'> <li>Rohit</li> </Link>
       <Link to='/Kohli'> <li> Kohli</li></Link>
      </ul>
    </div>
  )
}

export default India