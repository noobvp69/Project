import React from 'react'

function Internal() {
    const mystyle={backgroundColor: "blue"};
    const mystyle1={backgroundColor: "red"};
    
  return (
    <div>
      <p style={mystyle}>Hello color through Internal CSS</p>
      <h1 style={mystyle1}>My name is Ghost Rider</h1>
    </div>
  )
}

export default Internal

