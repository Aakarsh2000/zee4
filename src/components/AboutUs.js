import React from 'react'
import {useNavigate} from 'react-router-dom'

function AboutUs() {

  const myNav = useNavigate()
  return (
    <div>AboutUs <br></br>

    <button onClick={() => myNav(-1)} > BACK </button>

    </div>
  )
}

export default AboutUs