import React,{useReducer} from 'react'
const initialstate = 0
    const myReducer = (state,action)=>{
        switch(action){
            case 'increment':
                return state+1
            case 'decrement':
                return state-1
            case 'reset':
                return initialstate
            default:
                return state
        }
    }
function DemoUseReducer() {
    
    const[count,dispatch] = useReducer(myReducer, initialstate)

  return (
    <div> DemoUseReducer
        <h2> Count :{count}</h2><br></br>
        <button onClick={()=>dispatch('increment')}>Inc</button><br></br>
        <button onClick={()=>dispatch('decrement')}>Dec</button><br></br>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default DemoUseReducer
