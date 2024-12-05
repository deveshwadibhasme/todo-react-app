import React, { useState } from 'react'


const ToDoList = ({ todoTask }) => {

  const [newTask,setNewTask] = useState(todoTask)

  function removeTask(e) {
    e.target.parentNode.parentNode.remove()
  }

  function editTask(e){
    const input = e.target.parentNode.parentNode.querySelector('textarea')
    input.readOnly = !input.readOnly
    input.focus()
  }
  
  function showEdited(e){
    if( todoTask.isEditing = true){
      const input = e.target
      setNewTask(input.value)
      todoTask.text = input.value
      todoTask.isEditing = false
    }
  }

  return (
    <li className='bg-slate-100 p-2 flex justify-between items-center mb-3'>
      <img
        className='h-5 w-5 cursor-pointer'
        src="https://clipart-library.com/images_k/shapes-transparent/shapes-transparent-17.png" alt="" />
      <textarea
        readOnly
        value={todoTask.text}
        type="text"
        onChange={(e)=>{showEdited(e)}}
        className='outline-0 bg-transparent w-56 max-h-12 h-9 pt-[5px] overflow-hidden text-sm'></textarea>
      <div className='flex gap-1 items-center'>
        <img
          onClick={(e)=>{editTask(e), todoTask.isEditing = true}}
          className='h-7 w-7 cursor-pointer'
          src="https://png.pngtree.com/png-clipart/20221013/ourmid/pngtree-pencil-shape-childrens-day-title-box-png-image_6153135.png" alt="" />
        <img
          onClick={(e) => removeTask(e)}
          className='h-7 w-7 cursor-pointer'
          src="https://png.pngtree.com/png-vector/20220926/ourmid/pngtree-delete-button-3d-icon-png-image_6217492.png" alt="" />
      </div>
    </li>
  )
}

export default ToDoList