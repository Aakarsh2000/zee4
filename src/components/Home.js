import React from 'react'

import{useNavigate} from 'react-router-dom'

function Home() {

    const mynavigate = useNavigate()

 
  return (
    <div>
    <h1> HOME PAGE</h1> <br></br><br></br>

    <button onClick={() => mynavigate('/aboutus')}>Go to About</button>   
                
    </div>
    
  )
}

export default Home