import React from 'react'
import{useParams} from 'react-router-dom'

function Players() {
    const params = useParams()
    const playerId = params.playerid
  return (
    <div>
        <h3>Player Details of <h1>{playerId}</h1></h3>
        
        </div>
  )
}

export default Players