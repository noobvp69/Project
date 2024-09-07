import React from 'react'
function SimpleMap(){
    const array1 = [1,4,9,16];

const map1 = array1.map((x) => x * 2);
//document.write(map1);
  return (
    <div>
      {map1}
    </div>
  )
}


export default SimpleMap
