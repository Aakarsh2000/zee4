import React,{useState, useMemo} from 'react'

function DemoUseMemo() {

    // useMemo
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incCounterOne = () => {
        setCountOne(countOne + 1)
    }

    const incCounterTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const checkForEven = useMemo(
        () => {
            let i = 0
            while( i < 3000000000) {
                i++
            }
                
                return countOne % 2 == 0
            }, [countOne])       
          
       
  return (
    <div>DemoUseMemo <br></br><br></br>

        <button onClick={incCounterOne}>INCREMENT one -   {countOne}</button> <br></br>
         <span> {checkForEven ? 'Even Number' : 'Odd Number'}</span>

        <br></br> <br></br>

        <button onClick={incCounterTwo}>INCREMENT two -   {countTwo}</button>

    </div>
  )
}

export default DemoUseMemo