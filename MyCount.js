import {useState} from 'react'

function MyCount() {
    let [count,setCount]=useState(0)
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(count=0)
    }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={reset}>o</button>
    </div>
  )
}

export default MyCount
