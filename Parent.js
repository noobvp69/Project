import React from 'react'
import Child from './Child';

function Parent() {
  const flower ={
    name: "Rose",
    color: "Red",
    petals: 5
  };
    return (
    <div>
    <h1>Parent Component</h1>
    <Child flower={flower}></Child>  
    
    </div>
  )


}
export default Parent