import React from 'react'

function Todo() {
  return (
    <div>
        <h2>TODO APP</h2>
        <form>
            <input type="text" placeholder='Enter your todo' />
            <button>ADD</button>
        </form>
        <div>
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>
        </div>


    </div>
  )
}

export default Todo
