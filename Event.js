import React from 'react'

function Event() {
   function hello() 
  {

      alert("Hello!");
    }
    return(

        <button onClick={hello}>Click me!</button>  );
    
}

export default Event;