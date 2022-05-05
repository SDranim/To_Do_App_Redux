import React from 'react'
import {  useSelector } from 'react-redux'
import Task from './Task'

function List() {
    const taskList= useSelector(state=> state.taskList)
  return (
    <div>
           {taskList.map( (todo,id)  =>    <Task   todo={todo}    key={id} />)}
    </div>
  )
}

export default List
