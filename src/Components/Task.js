import React from 'react'
import { useDispatch } from 'react-redux'
import { deletetodo } from '../Redux/Action'


function Task({todo}) {
  const dispatch= useDispatch()
  return (
    <div>

      <ul>

        <li className="tasks-list">
           <h5 >{todo.task}
             <button className="remove-task-button"  onClick={()=> dispatch(deletetodo(todo.id) )  }  >X</button>
           </h5>
        </li>

      </ul>

</div>
  )
}

export default Task