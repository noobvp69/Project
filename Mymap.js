import React from 'react'

function Mymap() {
    const people=[
        {id: 1, name: "Sam", gender: "male", age:30},
        {id: 2, name: "Asher", gender: "male", age:13},
        {id: 3, name: "Gokul", gender: "male", age:18},
        {id: 4, name: "Ayush", gender: "male", age:22}

    
    ];

  return (
    <div>
      {people.map(person=>{
        return(
            <h4>
              <h1><b>Name: {person.name}</b></h1>
              <p>Id :{person.id}</p>


              <p>Age  :{person.age}</p>
              <p>gender   :{person.gender}</p>


            </h4>
        )
      
   
  
})}
</div>
  )
}

export default Mymap
