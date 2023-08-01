import React from 'react'
import './Todo.css'
import { useState } from 'react'


function Todo() {
  const [todo, setTodo] = useState('')
  const[todos, setTodos] = useState([])
 
  const addTodo = () => {
    setTodos([...todos,todo])
    console.log(todos);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container'>
        <h2>TODO APP</h2>
        <form className='form-group' onSubmit={handleSubmit} >
            <input type="text" value={todo} placeholder='Enter your todo' className='form-control' onChange={(event) => setTodo(event.target.value) } /> 
            <button onClick={addTodo} >ADD</button>
        </form>
        <div className='list'>
            <ul>
                <li className='form-control'>First</li>
                <li className='form-control'>Second</li>
                <li className='form-control'>Third</li>
            </ul>
        </div>
    </div>
  )
}

export default Todo
