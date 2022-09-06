import React,{useState} from 'react'

function DemoUseMemo() {
    const [countOne,setCountOne]  = useState(0)
    const incCounterOne = ()=>{
        setCountOne(countOne+1)
    }
    const incCounterTwo =()=>{
        setCountOne(countOne+2)
    }
    const checkForEven = () =>{
        let i =0
        while(i<3000000000) {
            i++
        }
            return countOne % 2 == 0
    }
  return (
    <div>DemoUseMemo
        <button onClick={incCounterOne}>Increment one  -{countOne}</button>
        
        <span>{checkForEven() ? 'Even Number':'Odd Number'}</span>

        <button onClick={incCounterTwo}>Increment Two  -{countOne}</button>
    </div>
  )
}

export default DemoUseMemo
