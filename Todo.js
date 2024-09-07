import React,{useState,useEffect} from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=> response.json()
    .then(data=> setTodos(data)));
    },[]);
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.slice(0,10).map(todo =>(
            <li key={todo.id}>
                <strong>{todo.title}</strong>- Completed: {todo.completed ? "Yes" : "No"}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
